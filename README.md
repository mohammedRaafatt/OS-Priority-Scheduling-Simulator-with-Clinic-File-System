# OS Task – Priority Scheduling Simulator & Clinic Records 🖥️🗂️

This repository contains two distinct components:

1. A **Priority Scheduling Simulator**: A web app for visualizing non-preemptive priority CPU scheduling.
2. A **Clinic Records Directory Tree**: A simulated file structure for practicing OS concepts like file management, permissions, and paths.

This project is designed as an educational resource for an Operating Systems course.

---

## 1. Priority Scheduling Simulator (Web App) ⚙️

**Directory:** `Project/`

This interactive web-based tool simulates **non-preemptive priority CPU scheduling** and visualizes the process execution dynamics.

### Key Features ✨:

- **Scheduler:** Non-preemptive priority scheduling (lower number = higher priority).
- **Gantt Chart:** Visualizes process execution order, including idle periods.
- **Process Metrics** 📊: Compute and display:
  - Completion Time
  - Turnaround Time
  - Waiting Time
  - Response Time
- **Averages:** Compute and display:
  - Average Waiting Time
  - Average Turnaround Time
  - Average Response Time

---

### 1.1 Tech Stack 🛠️

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

### 1.2 How to Run 🚀

1. Open the `Project/` directory.
2. Open `Project3.html` using any modern web browser:
   - Double-click the file
   - OR right-click > **Open with** > select your browser.

The app is fully client-side and does not require installation or a web server.

---

### 1.3 How to Use the Simulator 🖱️

1. **Set Number of Processes:**
   - Specify the number of processes (1–20).
   - Click **Generate Table** to create the input fields.
2. **Input Process Data:**
   - For each process, provide:
     - **Arrival Time:** Integer ≥ 0
     - **Burst Time:** Integer ≥ 1
     - **Priority:** Integer ≥ 1 (smaller number = higher priority)
   - Sample values may be pre-filled for convenience; these can be edited.
3. **Calculate Results:**
   - Click **Calculate**. Errors are flagged if input is invalid or missing.
4. **View Results:**
   - A **Gantt chart** visualizes the process execution timeline.
   - The **results table** lists:
     - Arrival Time, Burst Time, Priority
     - Completion Time, Turnaround Time, Waiting Time, Response Time
   - Averages are shown below the table.

---

### 1.4 Scheduling Algorithm 📂

- **Algorithm Type:** Non-preemptive priority scheduling.
- **Priority Rule:** Selects the process with the **lowest priority value** among all arrived processes.
- **Tie-breaking:** In the event of equal priority values, the process with the **earliest arrival time** is selected.
- **Idle Time:** If no processes are ready at a given time, the CPU is marked as **Idle** in the Gantt chart.

---

## 2. Clinic Records Directory Tree 📁

**Directory:** `clinic_records/`

This simulated file structure provides a platform for practicing typical file system tasks in an OS environment:

- **File Navigation:** Practice using `cd`, `ls`, `dir`, etc.
- **Paths:** Explore relative and absolute paths.
- **File Operations:** Search, archive, or examine logs.
- **Role-Based Permissions:** Simulate access for admin, doctor, and reception users.

---

### 2.1 Directory Structure 📜

- **admin/**
  - `logs/history.txt` – Example admin activity logs.
  - `policy.txt` – Example administrative policies.
- **doctors/**
  - `doctors_list.txt` – List of doctors.
  - **patients/**:
    - `patients_list.txt` – Current list of patients.
    - `old_patients_list.tar.gz` – Archived patient records (compressed).
  - `policy_link.txt` – Placeholder for referencing policy information.
- **reception/schedule/**:
  - Example reception files: `05_14_2025.txt`, `11_05_2025`, etc.
- **Global Files:**
  - `history.txt` – Organization-wide activity logs.
  - `policy.txt` – Clinic-wide policy document.

---

### 2.2 Example Exercises 📝

1. **Navigation:**
   - Use relative or absolute paths to explore directories.
2. **Search & Logs:**
   - Search for entries in `logs/history.txt` or `history.txt`.
3. **Archival Tasks:**
   - Extract the contents of `old_patients_list.tar.gz`.
4. **Permissions:**
   - Simulate or configure file permissions for clinic staff roles.

---

## 3. Repository Overview 🗂️

```plaintext
OS_Task-main/
├── Project/                 # Priority Scheduling Simulator (web app)
│   ├── index.html        # Main HTML file
│   ├── script.js            # Scheduler logic + DOM updates
│   └── style.css            # Dark theme UI styling
│
├── clinic_records/          # Simulated clinic file system
│   ├── admin/
│   ├── doctors/
│   ├── reception/
│   ├── history.txt          # Global history logs
│   └── policy.txt           # Clinic-wide policy document
│
└── README.md                # Project documentation
```

---

## 4. Extensions & Improvements 🔧

### For the Web App 🖥️:

- **Additional Scheduling Algorithms:**
  - Implement algorithms like **FCFS**, **SJF**, or **Round Robin**.
  - Extend the UI to allow selection between scheduling types.
- **Validation & Usability:**
  - Enhance error handling with highlighted invalid rows.
  - Enable saving/loading of process sets via files.
- **UI Improvements:**
  - Add responsive design for mobile support and **theme options** (dark/light modes).
  - Provide a **live calculation preview** feature.

### For the Clinic Records 🗂️:

- **Search Operations:**
  - Create scripts to extract specific log entries or patterns (e.g., using `grep` or scripting languages).
  - Automate **date-based log filtering**.
- **Access Control:**
  - Implement role-based permissions for staff (e.g., admin, doctor, and receptionist).
- **Scalability:**
  - Expand the file system simulation with larger, more complex directory structures.

---

## 🤝 Connect With Me

<p align="center">
  <a href="mailto:m.raafatgaber@gmail.com">
    <img src="https://img.shields.io/badge/Email-m.raafatgaber@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email Badge">
  </a>
  <a href="https://www.linkedin.com/in/mohammed-raafat-swe/">
    <img src="https://img.shields.io/badge/LinkedIn-Mohammed%20Raafat-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge">
  </a>
  <a href="https://github.com/mohammedRaafatt">
    <img src="https://img.shields.io/badge/GitHub-mohammedRaafatt-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Badge">
  </a>
  <a href="https://www.instagram.com/muhammad_raafat_/">
    <img src="https://img.shields.io/badge/Instagram-muhammad__raafat__-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram Badge">
  </a>
  <a href="https://www.facebook.com/profile.php?id=100004131767214">
    <img src="https://img.shields.io/badge/Facebook-Mohammed%20Raafat-1877F2?style=for-the-badge&logo=facebook&logoColor=white" alt="Facebook Badge">
  </a>
</p>

---

<p align="center">
  🌟 <em>Thanks for visiting my project — let’s build something amazing together!</em> 🌟
</p>

<p align="center">
  <img src="https://github.com/JayantGoel001/JayantGoel001/blob/master/WEBP/footer.webp" alt="Footer Banner"/>
</p>
