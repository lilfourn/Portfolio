"use client";

// app/hire/page.tsx
import ContactForm from '@/app/components/ContactForm';
import DailyCrossword from '../components/daily-crossword';

export default function HirePage() {
  return (
    <div className="min-h-screen py-20 space-y-8">
      <ContactForm />
    </div>
  );
}