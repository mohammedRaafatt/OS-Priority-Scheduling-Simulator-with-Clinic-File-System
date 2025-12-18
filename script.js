// === DOM Elements ===
const numInput = document.getElementById('num-processes');
const generateBtn = document.getElementById('generate-btn');
const processTbody = document.getElementById('process-tbody');
const processInput = document.getElementById('process-input');
const calculateBtn = document.getElementById('calculate-btn');
const results = document.getElementById('results');
const resultsTbody = document.getElementById('results-tbody');
const ganttBlocks = document.getElementById('gantt-blocks');
const ganttTimes = document.getElementById('gantt-times');
const processError = document.getElementById('process-error');
const inputError = document.getElementById('input-error');
const avgWaiting = document.getElementById('avg-waiting');
const avgTurnaround = document.getElementById('avg-turnaround');
const avgResponse = document.getElementById('avg-response');

const generateColors = count => {

      const colors = [];

      for (let i = 0; i < count; i++) {
            const hue = (i * 137) % 360;
            colors.push(`hsl(${hue}, 70%, 60%)`);
      }

      return colors;
};


generateBtn.onclick = () => {
      const n = parseInt(numInput.value);

      if (isNaN(n) || n < 1 || n > 20) {
            processError.textContent = 'Please enter a number between 1 and 20.';
            return;
      }

      processError.textContent = '';
      processTbody.innerHTML = '';

      for (let i = 0; i < n; i++) {
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>P${i + 1}</td>
            <td><input type="number" class="arrival-time" min="0" value="${i}"></td>
            <td><input type="number" class="burst-time" min="1" value="${Math.floor(Math.random() * 10) + 1}"></td>
            <td><input type="number" class="priority" min="1" value="${Math.floor(Math.random() * 10) + 1}"></td>
            `;
            processTbody.appendChild(row);
      }

      processInput.style.display = 'block';
      results.style.display = 'none';
};


calculateBtn.onclick = () => {
      const arrivals = [...document.querySelectorAll('.arrival-time')];
      const bursts = [...document.querySelectorAll('.burst-time')];
      const priorities = [...document.querySelectorAll('.priority')];

      const processes = [];
      for (let i = 0; i < arrivals.length; i++) {
            const at = parseInt(arrivals[i].value);
            const bt = parseInt(bursts[i].value);
            const pr = parseInt(priorities[i].value);
            if (isNaN(at) || at < 0 || isNaN(bt) || bt < 1 || isNaN(pr) || pr < 1) {
                  inputError.textContent = `Invalid input at row ${i + 1}`;
                  return;
            }

            processes.push({ id: i + 1, arrivalTime: at, burstTime: bt, priority: pr });
      }

      inputError.textContent = '';
      const result = priorityScheduling(processes);
      displayResults(result, processes);
};


function priorityScheduling(processes) {
      const n = processes.length;
      const proc = processes.map(p => ({ ...p, remainingTime: p.burstTime }));
      const gantt = [], completed = Array(n).fill(false), firstStart = Array(n).fill(-1);
      let currentTime = 0, done = 0;

      while (done < n) {
            let idx = -1, best = Infinity;
            for (let i = 0; i < n; i++) {
                  if (!completed[i] && proc[i].arrivalTime <= currentTime) {
                        if (proc[i].priority < best ||
                              (proc[i].priority === best && proc[i].arrivalTime < proc[idx]?.arrivalTime)) {

                              best = proc[i].priority;
                              idx = i;
                        }
                  }
            }

            if (idx === -1) {
                  gantt.push({ processId: 0, start: currentTime, end: currentTime + 1 });
                  currentTime++;
            }
            else {
                  if (firstStart[idx] === -1) firstStart[idx] = currentTime;

                  const p = proc[idx];
                  gantt.push({ processId: p.id, start: currentTime, end: currentTime + p.remainingTime });
                  currentTime += p.remainingTime;
                  completed[idx] = true;
                  done++;
                  p.completionTime = currentTime;
                  p.turnaroundTime = currentTime - p.arrivalTime;
                  p.waitingTime = p.turnaroundTime - p.burstTime;
                  p.responseTime = firstStart[idx] - p.arrivalTime;
            }
      }

      const avgW = proc.reduce((a, p) => a + p.waitingTime, 0) / n;
      const avgT = proc.reduce((a, p) => a + p.turnaroundTime, 0) / n;
      const avgR = proc.reduce((a, p) => a + p.responseTime, 0) / n;

      return { processes: proc, gantt, avgW, avgT, avgR };
}


function displayResults(result, original) {
      resultsTbody.innerHTML = '';
      ganttBlocks.innerHTML = '';
      ganttTimes.innerHTML = '';

      const colors = generateColors(original.length);
      const totalTime = result.gantt[result.gantt.length - 1].end;

      // Table
      result.processes.sort((a, b) => a.id - b.id).forEach(p => {
            resultsTbody.innerHTML += `
            <tr>
            <td>P${p.id}</td><td>${p.arrivalTime}</td><td>${p.burstTime}</td><td>${p.priority}</td>
            <td>${p.completionTime}</td><td>${p.turnaroundTime}</td>
            <td>${p.waitingTime}</td><td>${p.responseTime}</td>
            </tr>`;
      });

      avgWaiting.textContent = result.avgW.toFixed(2);
      avgTurnaround.textContent = result.avgT.toFixed(2);
      avgResponse.textContent = result.avgR.toFixed(2);

      const timeSet = new Set();

      result.gantt.forEach(block => {

            const duration = block.end - block.start;
            const width = (duration / totalTime) * 100;

            const div = document.createElement('div');
            div.className = 'gantt-block';
            div.style.width = width + '%';
            div.style.backgroundColor = block.processId === 0 ? '#bbb' : colors[block.processId - 1];
            div.textContent = block.processId === 0 ? 'Idle' : `P${block.processId}`;
            ganttBlocks.appendChild(div);

            if (!timeSet.has(block.start)) {
                  const t = document.createElement('div');
                  t.className = 'time-marker';
                  t.textContent = block.start;
                  t.style.left = `${(block.start / totalTime) * 100}%`;
                  ganttTimes.appendChild(t);
                  timeSet.add(block.start);
            }
      });

      const endMarker = document.createElement('div');
      endMarker.className = 'time-marker';
      endMarker.textContent = result.gantt[result.gantt.length - 1].end;
      endMarker.style.left = `100%`;
      ganttTimes.appendChild(endMarker);

      results.style.display = 'block';
}

// Auto initialize
generateBtn.click();
