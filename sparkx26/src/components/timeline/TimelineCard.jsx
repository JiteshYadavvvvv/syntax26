import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '../ui/card';
import { cn } from '../../lib/utils';
import { CalendarDays } from 'lucide-react';

export const TimelineCard = ({ data, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex w-full md:justify-center items-center group">
      {/* The timeline node (Class 1, Class 2, etc.) */}
      <div className="absolute left-[48px] md:left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
          className="transition-transform duration-300 group-hover:scale-110" 
        >
          <div className="bg-white text-black font-bold text-xs md:text-sm px-4 py-2 rounded-md shadow-lg whitespace-nowrap">
            {data.date}
          </div>
        </motion.div>
      </div>
      
      {/* The card */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={cn(
          "w-full pl-[110px] md:pl-0 md:w-[42%] text-left",
          isEven ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
        )}
      >
        <Card className="bg-white/5 border-white/10 backdrop-blur-xl rounded-2xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:border-white/20 hover:-translate-y-1 relative overflow-hidden group-hover:border-white/30">
          {/* Subtle inner glow */}
          <div className={cn(
            "absolute top-0 bottom-0 w-32 bg-blue-500/10 blur-3xl rounded-full pointer-events-none -z-10",
            isEven ? "-right-16" : "-left-16"
          )} />
          
          <CardHeader className="pb-2 text-left">
            {/* Class badge left — Date top-right */}
            <div className="flex items-start justify-between gap-2 mb-3">
              <span className="px-2.5 py-0.5 text-xs font-semibold rounded-sm bg-white text-black tracking-wide">
                {data.date}
              </span>
              {data.classDate && (
                <span className="flex items-center gap-1.5 text-xs text-white/40 shrink-0">
                  <CalendarDays className="w-3.5 h-3.5" />
                  {data.classDate}
                </span>
              )}
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">{data.title}</h3>
          </CardHeader>

          <CardContent className="pt-2 text-left flex flex-col gap-4">
            <p className="text-white/60 text-sm md:text-base leading-relaxed">
              {data.description}
            </p>
            {/* View Notes — bottom-right */}
            <div className="flex justify-end">
              <a
                href="#"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-white/10 hover:border-white/20"
              >
                View Notes
              </a>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

