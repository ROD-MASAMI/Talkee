"use client";
import React from "react";
import InfoCard from "./components/InfoCard";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import LinechartComponent, { Iaxis } from "@/components/charts/Linechart";
import BarChartComponent from "@/components/charts/BarChart";

const pages = () => {
  const [messages, setMessages] = React.useState([
    {
      role: "agent",
      content: "Hi, how can I help you today?",
    },
    {
      role: "user",
      content: "Hey, I'm having trouble with my account.",
    },
    {
      role: "agent",
      content: "What seems to be the problem?",
    },
    {
      role: "user",
      content: "I can't log in.",
    },
  ]);

  const data: Iaxis[] = [
    {
      value: 10400,
      item: "item1",
    },
    {
      value: 14405,
      item: "item2",
    },
    {
      value: 9400,
      item: "item3",
    },
    {
      value: 8200,
      item: "item4",
    },
    {
      value: 7000,
      item: "item5",
    },
    {
      value: 9600,
      item: "item6",
    },
    {
      value: 11244,
      item: "iem6",
    },
    {
      value: 26475,
      item: "item7",
    },
  ];

  return (
    <div className=" flex flex-1 flex-col p-5 gap-5">
      <div className="grid gap-4  md:grid-cols-2 lg:grid-cols-4">
        <InfoCard
          title="Total Revenue"
          description="+20.1% from last month"
          icon="dollar"
          value="$45,231.89"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
        <LinechartComponent title="Total Revenue" data={data} />

        <BarChartComponent title="Total Revenue" data={data} />
      </div>
    </div>
  );
};

export default pages;
