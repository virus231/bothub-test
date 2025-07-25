# 🔔 Notifications Pop-up Component

A React TypeScript application featuring an interactive notifications system with inbox and read states.

## ✨ Features

- **🔔 Notifications Pop-up**: Interactive component with inbox/read state management
- **📋 Segment Control**: Tab switching between Inbox and Read with notification counts
- **📝 Notification Items**: Rich notification display with icons, timestamps, and interactive elements
- **🔄 State Management**: Move notifications between states with animated transitions
- **📱 Responsive Design**: Mobile-first design with Tailwind CSS v4

## 🛠️ Tech Stack

- **⚛️ React 18** with TypeScript
- **⚡ Vite** with SWC for fast compilation
- **🎨 Tailwind CSS v4** with Vite plugin integration
- **🎯 Material Symbols** for icons
- **🔤 Chakra Petch** font family

## 🚀 Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production  
pnpm build

# Run linting
pnpm lint

# Preview production build
pnpm preview
```

## 🧩 Component Structure

- **🔔 NotificationsPopup**: Main container component with state management
- **📋 SegmentControl**: Tab switcher for Inbox/Read states
- **📝 NotificationItem**: Individual notification display component
- **🔘 SecondaryButton**: Reusable button component
- **🎯 IconButton**: Icon-based button component

## ⚙️ Functionality

### 📥 Inbox Tab
- Displays new/unread notifications
- "Mark all as read" button moves all notifications to Read tab
- Shows notification count in tab header

### 📖 Read Tab  
- Displays read notifications
- "Clear all" button removes all read notifications
- Shows notification count in tab header

### 📋 Notification Types
- **📢 Standard notifications** with icon, title, description, and timestamp
- **💰 Price notifications** with monetary values
- **⬆️ Upgrade prompts** with call-to-action buttons
- **🖼️ Image attachments** support
