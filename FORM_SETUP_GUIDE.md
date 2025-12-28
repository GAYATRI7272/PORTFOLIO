# Contact Form Setup Guide (Hindi/English)

## 📧 EmailJS Setup - Form Submissions Email Mein Kaise Aayengi

### Step 1: EmailJS Account Banao
1. Website visit karo: https://www.emailjs.com/
2. Free account banao (Free plan 200 emails/month deta hai)
3. Email verify karo

### Step 2: Email Service Add Karo
1. EmailJS dashboard mein jaao
2. **Email Services** section mein **Add New Service** click karo
3. **Gmail** select karo (ya apna email service)
4. Apna Gmail account connect karo
5. **Service ID** copy karo (example: `service_abc123`)

### Step 3: Email Template Banao
1. **Email Templates** section mein **Create New Template** click karo
2. Template mein ye variables add karo:
   ```
   From: {{from_name}} ({{from_email}})
   
   Message:
   {{message}}
   ```
3. **To Email** mein apni email likho: `gayatrijagadale7272@gmail.com`
4. **Subject** mein: `Portfolio Contact: {{from_name}}`
5. **Template ID** copy karo (example: `template_xyz789`)

### Step 4: Public Key Nikalo
1. **Account** section mein **API Keys** par click karo
2. **Public Key** copy karo (example: `abcdefghijklmnop`)

### Step 5: Code Mein Update Karo
1. `script.js` file kholo
2. Line 2 pe ye values replace karo:
   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY"); // Apni Public Key yahan dalo
   ```
3. Line 70-71 pe ye values replace karo:
   ```javascript
   const serviceID = 'YOUR_SERVICE_ID';      // Apna Service ID
   const templateID = 'YOUR_TEMPLATE_ID';    // Apna Template ID
   ```

### Step 6: Test Karo
1. Website open karo
2. Contact form fill karo
3. Submit karo
4. Check karo ki email aayi ya nahi

---

## 📊 Form Submissions Kaise Dekhein

### Browser Console Se
1. Website open karo
2. **F12** press karo (Developer Tools)
3. **Console** tab mein jaao
4. Type karo: `displayAllSubmissions()`
5. Saare submissions dikhenge

### JSON File Export Karne Ke Liye
1. Browser console mein type karo: `exportSubmissions()`
2. JSON file download hogi with all submissions
3. Ye file open karke dekho

---

## 💾 Data Kaise Save Hota Hai

### Automatic Save
- Har form submission **localStorage** mein automatically save hota hai
- Browser ke **Application** tab > **Local Storage** mein dekh sakte ho
- Last 50 submissions save rehte hain

### Email Notifications
- EmailJS setup karne ke baad har submission par email milegi
- Email mein sender ka name, email, aur message aayega
- Subject: `Portfolio Contact: [Name]`

---

## 🔧 Alternative Options (Agar EmailJS Setup Nahi Karna)

### Option 1: Web3Forms (Free, No Setup)
1. Visit: https://web3forms.com/
2. Get your access key
3. Form action update karo

### Option 2: Formspree (Free)
1. Visit: https://formspree.io/
2. Free account banao
3. Form endpoint use karo

### Option 3: Google Forms Integration
1. Google Form banao
2. Form action URL use karo

---

## ❓ Troubleshooting

### Problem: Email Nahin Aa Rahi
- Check karo EmailJS service connected hai ya nahi
- Check console for errors (F12)
- Verify karo template ID aur service ID sahi hai

### Problem: Form Submit Nahi Ho Raha
- Browser console check karo (F12)
- Check karo sab fields fill kiye hain
- Network tab check karo

### Problem: Data Save Nahi Ho Raha
- Check karo browser localStorage enabled hai
- Console mein check karo: `localStorage.getItem('contactSubmissions')`

---

## 📝 Important Notes

1. **Free Plan Limits**: EmailJS free plan mein 200 emails/month
2. **localStorage**: Data browser mein save hota hai, clear browser = data delete
3. **Backup**: Regular export karte raho submissions ko
4. **Privacy**: User data safely handle karo

---

## ✅ Checklist

- [ ] EmailJS account bana liya
- [ ] Email service add kar diya
- [ ] Email template bana liya
- [ ] Public Key, Service ID, Template ID copy kiye
- [ ] script.js mein values update kiye
- [ ] Test submission bheji
- [ ] Email receive hui verify kiya

---

**Need Help?** EmailJS documentation: https://www.emailjs.com/docs/



