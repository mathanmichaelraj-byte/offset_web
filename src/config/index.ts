import sweetBox from "../assets/image/services/sweetBox.jpg"
import cartonBox from "../assets/image/services/carton.jpg"
import textilesBox from "../assets/image/services/textile.jpg"
import calendar from "../assets/image/services/calendar.jpg"
import diary from "../assets/image/services/diary.jpg"
import cover from "../assets/image/services/cover.jpg"
import paperbags from "../assets/image/services/bags.jpg"

export const contactConfig = {
    email: "selvabharath2024@gmail.com",
    phone: "+91 877808694",
    address: "2/1206, Saratha Nagar, Sivakasi, Tamil Nadu, Code:33",
    gstNo: "33BMRPA6855P1ZD"
};

export const companyConfig = {
    name: "OFFSET PRINTING",
    tagline: "Professional offset printing services for all your business needs."
};

export const servicesData = [
    { 
        id: "sweetbox",
        title: "Printed Sweet Box", 
        desc: "Custom printed sweet boxes for festivals and special occasions",
        image: sweetBox,
        pricing: [
            { size: "Small", qty: "100-500", price: "₹15-25/piece" },
            { size: "Small", qty: "500+", price: "₹10-18/piece" },
            { size: "Medium", qty: "100-500", price: "₹25-40/piece" },
            { size: "Large", qty: "100+", price: "₹40-60/piece" },
        ]
    },
    { 
        id: "cartonbox",
        title: "Industrial Printed Carton Box", 
        desc: "Durable carton boxes with custom branding for industrial use",
        pricing: [
            { size: "Small", qty: "100-500", price: "₹30-50/piece" },
            { size: "Medium", qty: "100-500", price: "₹50-80/piece" },
            { size: "Large", qty: "100+", price: "₹80-120/piece" },
            { size: "Bulk Orders", qty: "500+", price: "Contact us" },
        ],
        image: cartonBox
    },
    { 
        id: "textilesbox",
        title: "Textiles Printed Box", 
        desc: "Premium packaging boxes for textile and garment products",
        pricing: [
            { size: "Standard", qty: "100-500", price: "₹20-35/piece" },
            { size: "Standard", qty: "500+", price: "₹15-28/piece" },
            { size: "Premium", qty: "100+", price: "₹35-55/piece" },
        ],
        image: textilesBox
    },
    { 
        id: "calendar",
        title: "Calendar", 
        desc: "Custom calendars with personalized designs and branding",
        pricing: [
            { size: "Wall Calendar", qty: "100-500", price: "₹40-70/piece" },
            { size: "Wall Calendar", qty: "500+", price: "₹30-55/piece" },
            { size: "Table Calendar", qty: "100-500", price: "₹25-45/piece" },
            { size: "Table Calendar", qty: "500+", price: "₹18-35/piece" },
        ],
        image: calendar
    },
    { 
        id: "diary",
        title: "Diary", 
        desc: "Professional diaries with custom covers and branding options",
        pricing: [
            { size: "A5 Size", qty: "100-500", price: "₹80-120/piece" },
            { size: "A5 Size", qty: "500+", price: "₹60-90/piece" },
            { size: "A4 Size", qty: "100+", price: "₹120-180/piece" },
        ],
        image: diary
    },
    { 
        id: "cover",
        title: "Cover", 
        desc: "Custom printed covers for books, notebooks, and documents",
        pricing: [
            { size: "Standard", qty: "100-500", price: "₹10-20/piece" },
            { size: "Standard", qty: "500+", price: "₹8-15/piece" },
            { size: "Premium Finish", qty: "100+", price: "₹15-30/piece" },
        ],
        image: cover
    },
    { 
        id: "paperbags",
        title: "Paper Bags", 
        desc: "Eco-friendly printed paper bags for retail and gifting",
        pricing: [
            { size: "Small", qty: "100-500", price: "₹8-15/piece" },
            { size: "Medium", qty: "100-500", price: "₹12-22/piece" },
            { size: "Large", qty: "100+", price: "₹18-30/piece" },
            { size: "Bulk Orders", qty: "1000+", price: "Special Rates" },
        ],
        image: paperbags
    }
];
