
import './styles.css';
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import asterisk1 from "./assets/icons/asterisk1.svg";
import asterisk3 from "./assets/icons/asterisk3.svg";
import asterisk5 from "./assets/icons/asterisk5.svg";

const fridgeItems = [
    { name: "Coca Cola", price: 2.80 },
    { name: "Coca Cola Zero", price: 2.80 },
    { name: "Fanta Orange", price: 2.80 },
    { name: "Fanta Lemon", price: 2.80 },
    { name: "Sprite", price: 2.80 },
    { name: "Vimto", price: 2.80 },
    { name: "Irn Bru", price: 2.80 },
    { name: "Diet Irn Bru", price: 2.50 },
    { name: "Red Bull", price: 2.80 },
    { name: "Cano Water", price: 2.00 },
    { name: "Jimmy's Iced Coffee", price: 4.50 }
];

const pantryItems = [
    { name: "Nobby's Nuts", price: 2.50 },
    { name: "Metcalfe's Popcorn", price: 2.50 },
    { name: "Maltesers Treat Bag", price: 2.50 },
    { name: "Fruit Pastilles Treat Bag", price: 2.50 },
    { name: "REAL Crisps", price: 1.00 },
    { name: "Taylor's Crisps", price: 1.00 },
    { name: "Skittles Treat Bag", price: 2.50 },
    { name: "Haribo Treat Bag", price: 2.50 }
];

export default function StaycityMenuCalculator() {
    return (
        <div className="flex flex-col items-center bg-[#fcf2e1] min-h-screen p-8">
            {/* Header Section */}
            <div className="flex items-center gap-4 mb-8">
                <h1 className="text-4xl text-[#2e2739] font-bold">staycity</h1>
                <img src={asterisk5} alt="asterisk" className="w-8 h-8" />
                <h2 className="text-3xl text-[#2e2739] font-bold">F&B Calculator</h2>
            </div>
            
            <div className="flex flex-wrap justify-center items-start gap-8">
                {/* Fridge Items */}
                <Card className="relative bg-[#f3895a] rounded-2xl p-6 w-full max-w-lg">
                    <img src={asterisk3} alt="asterisk" className="absolute inset-0 w-full h-full opacity-20 object-cover rounded-2xl" />
                    <CardContent>
                        <h2 className="text-2xl text-[#2e2739] font-bold flex items-center gap-2">
                            <img src={asterisk3} alt="" className="w-6 h-6" /> Fridge Items:
                        </h2>
                        <ul className="mt-4 space-y-4">
                            {fridgeItems.map((item, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <img src={asterisk1} alt="" className="w-4 h-4" />
                                    {item.name} - £{item.price.toFixed(2)}
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
    
                {/* Pantry Items */}
                <Card className="relative bg-[#ead2cf] rounded-2xl p-6 w-full max-w-lg">
                    <img src={asterisk3} alt="asterisk" className="absolute inset-0 w-full h-full opacity-20 object-cover rounded-2xl" />
                    <CardContent>
                        <h2 className="text-2xl text-[#2e2739] font-bold flex items-center gap-2">
                            <img src={asterisk3} alt="" className="w-6 h-6" /> Pantry Items:
                        </h2>
                        <ul className="mt-4 space-y-4">
                            {pantryItems.map((item, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <img src={asterisk1} alt="" className="w-4 h-4" />
                                    {item.name} - £{item.price.toFixed(2)}
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
