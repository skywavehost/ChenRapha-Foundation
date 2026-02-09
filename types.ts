
import React from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface ProgramCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  colorClass: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}