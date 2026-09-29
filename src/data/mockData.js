export const initialUserData = {
  name: "HARVINDER SINGH SANDHU",
  initials: "HS",
  crn: "980241917",
  accountNo: "0314112020",
  ifsc: "KKBK0005929",
  branch: "Krishna Nagar Paradise hotel Santi bhojnalay sagar 470003",
  upiId: "harvinder.sandhu@kotak",
  phone: "+91 98765 43210",
  email: "harvinder.sandhu@example.com",
  kycStatus: "Full KYC Verified",
  accountType: "Kotak 811 Super Savings",
  balance: 78450.50,
  activMoneyBalance: 125000.00,
  isActivMoneyEnabled: true,
  rewardPoints: 3420,
  unreadNotificationsCount: 3,
  
  // Card Details
  debitCard: {
    cardHolder: "HARVINDER SINGH SANDHU",
    cardNumber: "4532 8910 2341 8119",
    expiry: "09/29",
    cvv: "811",
    cardType: "Visa Platinum Virtual",
    isFrozen: false,
    onlineTxn: true,
    internationalTxn: false,
    contactlessTxn: true,
    dailyLimit: 50000,
    maxLimit: 100000
  },

  creditCard: {
    cardHolder: "HARVINDER SINGH SANDHU",
    cardNumber: "5241 6723 9012 4432",
    expiry: "11/28",
    cvv: "329",
    cardType: "Kotak League Platinum",
    availableLimit: 145000,
    totalLimit: 200000,
    dueDate: "15 Oct 2026",
    dueAmount: 12450.00
  }
};

export const initialTransactions = [
  {
    id: "TXN-600360831059",
    title: "Suman Devi",
    narration: "UPI/Suman Devi/600323378839/UPI",
    category: "Transfer",
    type: "debit",
    amount: 1500.00,
    date: "29 Sep 2026",
    timestamp: "2026-09-29T14:30:00.000Z",
    status: "Successful",
    mode: "UPI",
    refId: "UPI-600360831059",
    merchant: "UPI/Suman Devi/600323378839",
    icon: "Send",
    color: "bg-purple-100 text-purple-700"
  },
  {
    id: "TXN-600359276833",
    title: "Shivam Bakers",
    narration: "UPI/Shivam Bakers/600338081935/UPI",
    category: "Food & Dining",
    type: "debit",
    amount: 350.00,
    date: "28 Sep 2026",
    timestamp: "2026-09-28T18:20:00.000Z",
    status: "Successful",
    mode: "UPI",
    refId: "UPI-600359276833",
    merchant: "UPI/Shivam Bakers/600338081935",
    icon: "Utensils",
    color: "bg-amber-100 text-amber-700"
  },
  {
    id: "TXN-600348877614",
    title: "RAHUL YADAV",
    narration: "UPI/RAHUL YADAV/600362470758/UPI",
    category: "Transfer",
    type: "debit",
    amount: 2000.00,
    date: "28 Sep 2026",
    timestamp: "2026-09-28T11:15:00.000Z",
    status: "Successful",
    mode: "UPI",
    refId: "UPI-600348877614",
    merchant: "UPI/RAHUL YADAV/600362470758",
    icon: "Send",
    color: "bg-blue-100 text-blue-700"
  },
  {
    id: "TXN-600346403491",
    title: "Atishay Jain",
    narration: "UPI/Atishay Jain/600314158473/UPI",
    category: "Transfer",
    type: "debit",
    amount: 800.00,
    date: "27 Sep 2026",
    timestamp: "2026-09-27T16:45:00.000Z",
    status: "Successful",
    mode: "UPI",
    refId: "UPI-600346403491",
    merchant: "UPI/Atishay Jain/600314158473",
    icon: "Send",
    color: "bg-purple-100 text-purple-700"
  },
  {
    id: "TXN-600346280194",
    title: "Atishay Jain",
    narration: "UPI/Atishay Jain/600372960105/UPI",
    category: "Transfer",
    type: "debit",
    amount: 1200.00,
    date: "24 Sep 2026",
    timestamp: "2026-09-24T19:10:00.000Z",
    status: "Successful",
    mode: "UPI",
    refId: "UPI-600346280194",
    merchant: "UPI/Atishay Jain/600372960105",
    icon: "Send",
    color: "bg-purple-100 text-purple-700"
  },
  {
    id: "TXN-600338510811",
    title: "BP Petrol Pump",
    narration: "UPI/BP Petrol Pump /600346154216/UPI",
    category: "Fuel & Travel",
    type: "debit",
    amount: 500.00,
    date: "24 Sep 2026",
    timestamp: "2026-09-24T09:30:00.000Z",
    status: "Successful",
    mode: "UPI",
    refId: "UPI-600338510811",
    merchant: "BP Petrol Pump /600346154216",
    icon: "Zap",
    color: "bg-rose-100 text-rose-700"
  },
  {
    id: "TXN-600307193501",
    title: "Roop Singh",
    narration: "SentIMPS600307241551Roop Singh/SBINX0023/IMPS",
    category: "IMPS Transfer",
    type: "debit",
    amount: 5000.00,
    date: "23 Sep 2026",
    timestamp: "2026-09-23T15:20:00.000Z",
    status: "Successful",
    mode: "IMPS",
    refId: "IMPS-600307193501",
    merchant: "Roop Singh/SBINX0023",
    icon: "Landmark",
    color: "bg-indigo-100 text-indigo-700"
  },
  {
    id: "TXN-600333433996",
    title: "MAHENDRA KURMI",
    narration: "UPI/MAHENDRA KURMI/811406185034/Payment from Ph",
    category: "Transfer",
    type: "debit",
    amount: 850.00,
    date: "23 Sep 2026",
    timestamp: "2026-09-23T10:05:00.000Z",
    status: "Successful",
    mode: "PhonePe UPI",
    refId: "UPI-600333433996",
    merchant: "MAHENDRA KURMI/811406185034",
    icon: "Send",
    color: "bg-emerald-100 text-emerald-700"
  }
];

export const mockBeneficiaries = [
  { id: "b1", name: "Suman Devi", upiId: "sumandevi@upi", avatar: "SD", bank: "State Bank of India", favorite: true },
  { id: "b2", name: "RAHUL YADAV", upiId: "rahulyadav@paytm", avatar: "RY", bank: "Paytm Payments Bank", favorite: true },
  { id: "b3", name: "Atishay Jain", upiId: "atishay.jain@okaxis", avatar: "AJ", bank: "Axis Bank", favorite: true },
  { id: "b4", name: "Roop Singh", accountNo: "30291482910", ifsc: "SBIN0000023", avatar: "RS", bank: "State Bank of India", favorite: true },
  { id: "b5", name: "MAHENDRA KURMI", upiId: "811406185034@ybl", avatar: "MK", bank: "PhonePe / Yes Bank", favorite: false }
];

export const mockBillerCategories = [
  { id: "electricity", name: "Electricity", icon: "Zap", color: "bg-amber-500", billers: ["Tata Power", "Adani Electricity", "MSEDCL", "BSES Rajdhani"] },
  { id: "mobile", name: "Mobile Recharge", icon: "Smartphone", color: "bg-blue-500", billers: ["Jio Prepaid", "Airtel Prepaid", "Vi Prepaid", "BSNL"] },
  { id: "fastag", name: "FASTag Recharge", icon: "Car", color: "bg-emerald-500", billers: ["Kotak FASTag", "NHAI FASTag", "ICICI FASTag", "Paytm FASTag"] },
  { id: "dth", name: "DTH / Cable TV", icon: "Tv", color: "bg-purple-500", billers: ["Tata Play", "Airtel Digital TV", "Dish TV", "Sun Direct"] },
  { id: "broadband", name: "Broadband", icon: "Wifi", color: "bg-indigo-500", billers: ["JioFiber", "Airtel Xstream", "ACT Fibernet", "Hathway"] },
  { id: "gas", name: "Piped Gas / Cylinder", icon: "Flame", color: "bg-orange-500", billers: ["Mahanagar Gas", "Indraprastha Gas", "HP Gas", "Indane"] },
  { id: "creditcard", name: "Credit Card Bill", icon: "CreditCard", color: "bg-rose-500", billers: ["Kotak Credit Card", "HDFC Bank", "SBI Card", "ICICI Bank"] },
  { id: "water", name: "Water Bill", icon: "Droplets", color: "bg-cyan-500", billers: ["Delhi Jal Board", "BMC Water Mumbai", "BWSSB Bangalore"] }
];

export const mockOffers = [
  {
    id: "off-1",
    title: "Kotak 811 Zero Balance Account",
    tagline: "Enjoy instant digital banking with zero maintenance charges and free virtual debit card",
    code: "KOTAK811",
    bg: "from-rose-600 to-red-800",
    badge: "Featured"
  },
  {
    id: "off-2",
    title: "Kotak 811 Super Savings",
    tagline: "Zero balance account with flat 5% cashback on debit card shopping",
    code: "SUPER811",
    bg: "from-slate-900 via-blue-950 to-indigo-950",
    badge: "Featured"
  },
  {
    id: "off-3",
    title: "Flat ₹500 off on Flight Tickets",
    tagline: "Use code KOTAKFLY on MakeMyTrip using your Kotak 811 Virtual Card",
    code: "KOTAKFLY",
    bg: "from-blue-700 to-cyan-800",
    badge: "Travel"
  },
  {
    id: "off-4",
    title: "Swiggy & Zomato 20% Instant Discount",
    tagline: "Order food and pay via Kotak UPI or Debit Card for instant savings",
    code: "KOTAKEATS",
    bg: "from-amber-600 to-orange-700",
    badge: "Dining"
  }
];

export const mockNotifications = [
  {
    id: "notif-1",
    title: "Money Received via UPI",
    message: "₹500.00 credited to A/C 0314112020 from Amit Patel via UPI.",
    time: "10 mins ago",
    read: false,
    icon: "ArrowDownLeft",
    color: "text-emerald-500 bg-emerald-50"
  },
  {
    id: "notif-2",
    title: "ActivMoney Interest Credited",
    message: "Monthly sweep interest of ₹812.50 has been credited to your 811 account.",
    time: "2 hours ago",
    read: false,
    icon: "TrendingUp",
    color: "text-blue-500 bg-blue-50"
  },
  {
    id: "notif-3",
    title: "Security Alert: New Device Login",
    message: "Successful MPIN login registered on iPhone 16 Pro from Mumbai, India.",
    time: "Yesterday",
    read: true,
    icon: "ShieldCheck",
    color: "text-amber-500 bg-amber-50"
  }
];
