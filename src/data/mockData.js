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
  id: "TXN-615446124194",
  title: "Mr MAHENDER SIN",
  narration: "UPI/Mr MAHENDER SIN/944706062063/Payment from Ph",
  category: "Transfer",
  type: "debit",
  amount: 4100.00,
  date: "29 Sep 2026",
  timestamp: "2026-09-29T14:30:00.000Z",
  status: "Successful",
  mode: "PhonePe UPI",
  refId: "UPI-615446124194",
  merchant: "Mr MAHENDER SIN/944706062063",
  icon: "Send",
  color: "bg-purple-100 text-purple-700"
},
{
  id: "TXN-615446213410",
  title: "MAHENDER SINGH",
  narration: "UPI/MAHENDER SINGH/615452178834/UPI",
  category: "Transfer",
  type: "debit",
  amount: 100.00,
  date: "29 Sep 2026",
  timestamp: "2026-09-29T18:00:00.000Z",
  status: "Successful",
  mode: "UPI",
  refId: "UPI-615446213410",
  merchant: "MAHENDER SINGH/615452178834",
  icon: "Send",
  color: "bg-purple-100 text-purple-700"
},
{
  id: "TXN-615446232765",
  title: "Mr MAHENDER SIN",
  narration: "UPI/Mr MAHENDER SIN/716353918987/Payment from Ph",
  category: "Transfer",
  type: "debit",
  amount: 100.00,
  date: "30 Sep 2026",
  timestamp: "2026-09-30T14:30:00.000Z",
  status: "Successful",
  mode: "PhonePe UPI",
  refId: "UPI-615446232765",
  merchant: "Mr MAHENDER SIN/716353918987",
  icon: "Send",
  color: "bg-purple-100 text-purple-700"
},
{
  id: "TXN-615447054047",
  title: "AMAN",
  narration: "UPI/AMAN/607284730632/Sent from Paytm",
  category: "Transfer",
  type: "debit",
  amount: 3000.00,
  date: "01 Oct 2026",
  timestamp: "2026-10-01T14:30:00.000Z",
  status: "Successful",
  mode: "Paytm UPI",
  refId: "UPI-615447054047",
  merchant: "AMAN/607284730632",
  icon: "Send",
  color: "bg-blue-100 text-blue-700"
},
{
  id: "TXN-615448382317",
  title: "NETFLIX COM",
  narration: "UPI/NETFLIX COM/103411475095/Monthly autopay",
  category: "Subscriptions",
  type: "debit",
  amount: 149.00,
  date: "02 Oct 2026",
  timestamp: "2026-10-02T00:00:00.000Z",
  status: "Successful",
  mode: "UPI",
  refId: "UPI-615448382317",
  merchant: "NETFLIX COM/103411475095",
  icon: "CreditCard",
  color: "bg-red-100 text-red-700"
},
{
  id: "TXN-615417995729",
  title: "VPAY",
  narration: "Rec:IMPS/615428065304/VPAY/KKBK/X3613/VPAY",
  category: "IMPS Transfer",
  type: "credit",
  amount: 3500.00,
  date: "02 Oct 2026",
  timestamp: "2026-10-02T10:00:00.000Z",
  status: "Successful",
  mode: "IMPS",
  refId: "IMPS-615417995729",
  merchant: "VPAY/KKBK/X3613/VPAY",
  icon: "Landmark",
  color: "bg-green-100 text-green-700"
},
{
  id: "TXN-6154484426414",
  title: "Priyanka Priya",
  narration: "UPI/Priyanka Priya/638146575711/Payment from Ph",
  category: "Transfer",
  type: "debit",
  amount: 50.00,
  date: "04 Oct 2026",
  timestamp: "2026-10-04T10:00:00.000Z",
  status: "Successful",
  mode: "PhonePe UPI",
  refId: "UPI-6154484426414",
  merchant: "Priyanka Priya/638146575711",
  icon: "Send",
  color: "bg-purple-100 text-purple-700"
},
{
  id: "TXN-615489458884",
  title: "VIRENDER KUMAR",
  narration: "UPI/VIRENDER KUMAR/844967207031/Payment from Ph",
  category: "Transfer",
  type: "debit",
  amount: 1000.00,
  date: "04 Oct 2026",
  timestamp: "2026-10-04T12:00:00.000Z",
  status: "Successful",
  mode: "PhonePe UPI",
  refId: "UPI-615489458884",
  merchant: "VIRENDER KUMAR/844967207031",
  icon: "Send",
  color: "bg-purple-100 text-purple-700"
},
{
  id: "TXN-615491121014",
  title: "MANOJ KUMAR SO",
  narration: "UPI/MANOJ KUMAR SO/402097881772/Payment from Ph",
  category: "Transfer",
  type: "debit",
  amount: 350.00,
  date: "04 Oct 2026",
  timestamp: "2026-10-04T14:00:00.000Z",
  status: "Successful",
  mode: "PhonePe UPI",
  refId: "UPI-615491121014",
  merchant: "MANOJ KUMAR SO/402097881772",
  icon: "Send",
  color: "bg-purple-100 text-purple-700"
}
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
