# 🚗 Mechanic Connector

A web-based platform that connects vehicle owners (Service Seekers) with mechanics/garages (Service Providers) in a structured,

request-based workflow.


## 📌 Problem


Finding a reliable mechanic quickly is difficult, especially in urgent situations.

* ❌ No centralized system to discover nearby garages
* ❌ Poor communication between customers and mechanics
* ❌ No structured way to manage service requests
* ❌ Lack of transparency in request handling (accepted/rejected/completed)

## 💡 Solution
Mechanic Connector solves this by providing:

* ✅ A platform to discover available garages
* ✅ A structured request system (pending → accepted → completed)
* ✅ Separate dashboards for seekers and providers
* ✅ Service-based matching between users and garages
* ✅ Location-aware request handling

## 👥 Target Users
### 🔹 Service Seeker
Vehicle owners who need services such as:
* Repairs
* Diagnostics
* Maintenance

#### Capabilities:
* Register & login
* Browse garages and services
* Request a service
* Track request status
* View request history

### 🔹 Service Provider (Garage)
Mechanics or garage owners offering services
#### Capabilities:
* Register & login
* Add services offered
* Receive service requests
* Accept / reject requests
* Mark jobs as completed
* Manage dashboard

---

## ⚙️ Features
* 🔐 Authentication system (Seeker & Provider)
* 📦 Modular architecture (UI → Services → Models → Storage)
* 📍 Location support (user + request level)
* 🔄 Request lifecycle:
``` pending → accepted / rejected → completed ```
* 🧠 Multi-user system (no data overwrite)
* 💬 In-app messaging system (replaces alert popups)
* 🧾 Dynamic rendering (no hardcoded data)
---

## 🏗️ Project Structure

```
html/
  serviceSeeker/
  serviceProvider/

js/
  auth/        # authentication logic
  models/      # OOP models (User, Request, Garage...)
  services/    # business logic
  storage/     # localStorage handling
  ui/          # DOM + rendering logic

src/           # assets (images)

```
---

## 🧠 Architecture

```
UI Layer → Services Layer → Models → Storage → localStorage

```

* **UI Layer:** Handles DOM interactions
* **Services Layer:** Business logic (requests, garages, etc.)
*  **Models:** Object-oriented structure
*  **Storage:** Data persistence

---

## 🧩 OOP Concepts Used
* ✅ **Classes** → User, Request, Garage
* ✅ **Inheritance** → ServiceProvider & ServiceSeeker extend User
* ✅ **Polymorphism** → Different behaviors for roles
* ✅ **Abstraction** → Services layer hides complexity
* ✅ **Composition** → Garage contains services

---

## 🛠️ Tech Stack
* **Frontend:** HTML, Tailwind CSS, JavaScript (ES Modules)
* **Storage:** localStorage (custom repository pattern)
* **Architecture:** Modular JS + OOP principles
---
## 🚀 Getting Started
1.  Clone the repo:
```
git clone https://github.com/amin10003/mobile-mechanic.git
cd mobile-mechanic
```
2. Run the project:

Open index.html in your browser or use Live Server.

