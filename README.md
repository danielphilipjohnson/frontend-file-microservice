# 🌐 Frontend Client for Rust File Microservice

> This frontend connects to a high-performance Rust/Axum-based file upload API.  
> Built with **Next.js** and **React Query**, it provides a responsive and efficient way for users to upload files and monitor server status.

---

## ⚙️ Features

- 🌍 Connects seamlessly to the Rust backend at `/upload` and `/health`
- 📁 Drag-and-drop file uploader using `multipart/form-data`
- 🚥 Health check panel to ensure backend availability
- ⚡ React Query for client-side caching and request management
- 🧠 Smart UI feedback (file validation, error handling, animated status)

---

## 📂 Project Structure

```

src/
├── app/                      # App router pages
│   ├── page.tsx             # Main upload interface
│   └── system/page.tsx      # Dashboard view
│
├── components/
│   ├── FileUploadTerminal.tsx  # Upload UI composition
│   ├── HealthStatus.tsx        # Live health badge
│   ├── StatusIndicator.tsx     # Animated indicator component
│
├── features/
│   └── dashboard/           # System dashboard components and hooks
│
├── lib/
│   ├── api/
│   │   ├── client.ts        # Shared fetch logic
│   │   └── routes.ts        # API endpoint mapping
│   └── react-query/
│       └── QueryProvider.tsx # QueryClient provider
│
├── hooks/
│   └── useFileUpload.ts     # Encapsulated upload state/logic
│
└── utils/
└── helpers.ts           # Misc utilities and file formatters

````

---

## 🚀 Getting Started

### 1️⃣ Clone and Install

```bash
git clone https://github.com/danielphilipjohnson/frontend-file-microservice.git
cd frontend-file-microservice
npm install
````

---

Great! Since your frontend relies on a specific Rust microservice (hosted here: [**danielphilipjohnson/file-microservice**](https://github.com/danielphilipjohnson/file-microservice)), it's important to make that link clear in the setup instructions.

Here’s the **updated section** for your `README.md`:

---

### 2️⃣ Configure Environment

Before starting the frontend, make sure the Rust file microservice is running locally. You can find it here:

> 🦀 **Rust API Repo**: [github.com/danielphilipjohnson/file-microservice](https://github.com/danielphilipjohnson/file-microservice)

Clone and run it following the instructions in its own README.

Then, in this frontend repo, create a `.env.local` file:

```env
# Rust backend API (used by frontend server routes)
RUST_API_URL=http://localhost:3001

# Public-facing API base URL for client-side fetches
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
```

✅ These values ensure:

* Internal API routes talk to the Rust backend on port `3001`
* Client-side code fetches from this frontend's own origin (`localhost:3000`)

---

### 3️⃣ Start the Dev Server

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 📡 API Usage

### 📤 Upload a File – `POST /upload`

```bash
curl -X POST http://localhost:3001/upload \
     -F "upfile=@yourfile.txt"
```

The UI supports:

* Selecting a file manually or via drag-and-drop
* Allowed types: `text/plain`, `application/json`, `application/pdf`
* Max size: 1MB

**Response:**

```json
{
  "name": "example.txt",
  "type": "text/plain",
  "size": 1234
}
```

---

### 💓 Health Check – `GET /health`

```bash
curl http://localhost:3001/health
```

**Response:**

```json
{
  "status": "healthy",
  "timestamp": 1700000000
}
```

---

## 🔐 Backend Compatibility

Make sure the Rust file microservice:

* Is running on `http://localhost:3001`
* Supports the following routes:

  * `POST /upload` – File upload endpoint
  * `GET /health` – Health check JSON
  * (Optional) `GET /metrics` – For system dashboard

---


## 🛠 Dev Notes

* Uses **React Query** via a shared `QueryClient` provider:

```tsx
<QueryClientProvider client={queryClient}>
  {children}
</QueryClientProvider>
```

* Rate limit headers can be read from API responses:

```ts
res.headers.get("X-RateLimit-Remaining");
```

* `useFileUpload.ts` abstracts and validates:

  * File size/type
  * Upload state
  * Error handling

---

## 🤝 Contributing

1. Fork the repo
2. Create a new branch
3. Submit a pull request

All contributions welcome — bugfixes, ideas, and improvements!

---

## 📬 Contact

* GitHub: [@danielphilipjohnson](https://github.com/danielphilipjohnson)
* Blog: [dev.to/danielphilipjohnson](https://dev.to/danielphilipjohnson)

---

## ⭐ Like This?

If you find this project useful, feel free to **star** it on GitHub and share it with others!

