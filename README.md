# Portfolio Website - Gayatri Jagadale

A modern, responsive portfolio website showcasing skills, projects, and achievements.

## 📸 How to Add Your Photo (Photo Kaise Add Karein)

### Method 1: Simple Method (Sabse Aasan)
1. Apni photo ko portfolio folder mein copy karein
2. Photo ka naam `profile-photo.jpg` rakhein
3. Photo ko same folder mein rakhein jahan `index.html` hai
4. Browser mein page refresh karein

### Method 2: Different Name/Format
Agar aap photo ka naam alag rakhte hain (jaise `my-photo.png`):
1. `index.html` file kholen
2. Line 37 pe jao: `<img src="profile-photo.jpg" alt="Gayatri Jagadale" id="profile-photo">`
3. `profile-photo.jpg` ko apni photo ke naam se replace karein
   - Example: `<img src="my-photo.png" alt="Gayatri Jagadale" id="profile-photo">`

### Photo Requirements (Photo Ki Requirements)
- **Format**: JPG, PNG, or any web image format
- **Size**: Recommended 500x500 pixels or larger (square photo best hai)
- **File Size**: Try to keep under 2MB for fast loading

## 🚀 How to Use (Kaise Use Karein)

1. **Open the website**: `index.html` file ko browser mein kholen
2. **Edit Information**: Agar koi information change karni ho, `index.html` file edit karein
3. **Customize**: Colors aur styling change karne ke liye `styles.css` file edit karein

## 📁 Files Structure

```
portfolio/
├── index.html      (Main website file)
├── styles.css      (Styling aur colors)
├── script.js       (Interactive features)
├── profile-photo.jpg (Aapki photo - ye add karni hai)
├── CV.pdf          (Aapka CV/Resume - ye add karni hai)
└── README.md       (Yeh file)
```

## 📄 CV/Resume Kaise Add Karein

1. Apna CV/Resume PDF format mein save karein
2. File ka naam `CV.pdf` rakhein (exactly yeh naam)
3. Isi folder mein rakhein jahan `index.html` hai
4. Browser refresh karein - Download CV button kaam karega

**Note:** Agar aapka CV ka naam alag hai (jaise `resume.pdf` ya `Gayatri_CV.pdf`):
- `index.html` file kholen
- Line 54 pe `href="CV.pdf"` ko apne CV ke naam se replace karein
- Example: `href="resume.pdf"` ya `href="Gayatri_CV.pdf"`

## ✨ Features

- ✅ Responsive Design (Mobile, Tablet, Desktop sab pe kaam karega)
- ✅ Modern UI/UX
- ✅ Smooth Scrolling
- ✅ Contact Form
- ✅ Skills Section with Progress Bars
- ✅ Projects Showcase
- ✅ Education & Certifications

## 📝 Important Notes

- Photo add karne ke baad website refresh karein
- Agar photo nahi dikh rahi, check karein ki:
  - Photo ka naam sahi hai
  - Photo same folder mein hai
  - Photo ka format supported hai (JPG, PNG)

## 🎨 Customization

Agar aap colors change karna chahte hain:
1. `styles.css` file kholen
2. Top pe `:root` section mein colors change karein
3. Save karein aur refresh karein

---

**Made with ❤️ for Gayatri Jagadale**

