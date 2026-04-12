import React from 'react';
import { TimelineCard } from './TimelineCard';

const classes = [
  { id: 1, title: "HTML and CSS", date: "Classx 1", classDate: "July 18, 2026", description: "Introduction to web structure and styling fundamentals." },
  { id: 2, title: "JavaScript Basics", date: "Classx   2", classDate: "July 19, 2026", description: "Core JS concepts like variables, loops, and functions." },
  { id: 3, title: "Recap + Git", date: "Classx 3", classDate: "July 25, 2026", description: "Revision session and introduction to version control with Git." },
  { id: 4, title: "Promises, Callbacks, CPU vs IO Tasks", date: "Classx 4", classDate: "July 26, 2026", description: "Understanding async patterns and task execution." },
  { id: 5, title: "Promises", date: "Classx 5", classDate: "Aug 1, 2026", description: "Deep dive into promises and chaining." },
  { id: 6, title: "Writing promises and async await", date: "Classx 6", classDate: "Aug 2, 2026", description: "Practical usage of async/await and promise handling." },
  { id: 7, title: "Functions, Prompts and Alerts", date: "Classx 7", classDate: "Aug 8, 2026", description: "Working with functions and browser interactions." },
  { id: 8, title: "DOM Manipulation", date: "Classx 8", classDate: "Aug 9, 2026", description: "Learn how to control and update the DOM dynamically." },
  { id: 9, title: "Recap + Project", date: "Classx 9", classDate: "Aug 15, 2026", description: "Build a project and revise all key concepts." },
  { id: 10, title: "Doubt Session And Project", date: "Classx 10", classDate: "Aug 16, 2026", description: "Final doubts clearing and project completion." }
];

export const Timeline = () => {
  return (
    <section className="relative w-full max-w-6xl mx-auto  px-6 py-24 text-white" id="schedule">
      <div className="mb-20 text-center">
        <p className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4">
          Agenda
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Timeline</h1>
        
      </div>

      <div className="relative flex flex-col gap-10 md:gap-16">
        {/* Vertical line connecting the timeline */}
        <div className="absolute top-0 bottom-0 left-[48px] md:left-1/2 w-px bg-white/10 transform -translate-x-1/2 rounded-full" />
        
        {classes.map((cls, index) => (
          <TimelineCard key={cls.id} data={cls} index={index} />
        ))}
      </div>
    </section>
  );
};
