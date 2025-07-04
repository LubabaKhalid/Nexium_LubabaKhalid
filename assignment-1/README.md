# 🎉 Quote Generator Web App

A modern, responsive Quote Generator built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **ShadCN UI**.  
Users can type **any keyword or topic**, get **up to 3 matching quotes**, and see the background change based on the topic — using **colors or images**.

---

## 🔥 Live Demo
https://nexium-lubaba-khalid-ddfp.vercel.app/

---

## 💡 Features

- ✅ Search quotes by **any word** (not just topics)
- ✅ Returns up to **3 relevant quotes**
- ✅ Background changes based on topic:
  - 🌈 Color backgrounds (e.g. `wife`, `sad`, `success`)
  - 🖼️ Image backgrounds (e.g. `love.jpeg`, `family.jpg`)
- ✅ Smooth transitions (animated background switch)
- ✅ 🔍 Autocomplete dropdown for suggestions
- ✅ ShadCN UI components for clean design
- ✅ Fully responsive and accessible

---

## 🧩 Tech Stack

| Tool        | Purpose                         |
|-------------|----------------------------------|
| **Next.js** | React framework (App Router)     |
| **TypeScript** | Type safety                   |
| **Tailwind CSS** | Styling framework            |
| **ShadCN UI** | Input and Button components    |
| **Vercel**  | Deployment platform              |

---

## 🧠 How It Works

- Quotes are stored in `quotes.ts` (`local array`)
- User types any text → it searches inside `quote.text` and `quote.topic`
- If a match is found:
  - Displays up to 3 quotes
  - Changes background based on topic (color or image)
- Background mapping is done via a dictionary (`backgroundMap`)

---


## 🚀 Getting Started (How Anyone Can Use It)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/assignment-1.git
cd assignment-1
npm install
npm run dev
