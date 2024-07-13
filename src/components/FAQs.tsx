'use client';

import React from "react";
import PlusIcon from "../assets/icons/plus.svg";
import MinusIcon from "../assets/icons/minus.svg";
import { motion } from "framer-motion";
import clsx from "clsx";

// Define the type for the items
type FAQItem = {
  question: string;
  answer: string;
};

const items: FAQItem[] = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and various other payment methods depending on your location. Please contact our support team for more information on accepted payment methods in your region.",
  },
  {
    question: "How does the pricing work for teams?",
    answer:
      "Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users.",
  },
];

// Define the type for the props of AccordionItem
type AccordionItemProps = {
  question: string;
  answer: string;
};

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className="flex items-center py-7 border-b border-white/30 cursor-pointer"
        onClick={toggleOpen}
      >
        <span className="flex-1 text-lg font-bold">{question}</span>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="mt-4 text-white/70">{answer}</div>
      </motion.div>
    </div>
  );
};

export const FAQs = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-[#5D2CA8] to-black py-[72px] sm:py-24">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl sm:text-6xl font-bold tracking-tighter">
          Frequently Asked Questions
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ question, answer }) => (
            <AccordionItem question={question} answer={answer} key={question} />
          ))}
        </div>
      </div>
    </div>
  );
};