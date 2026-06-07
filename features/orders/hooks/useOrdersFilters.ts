"use client";

import { useMemo, useState } from "react";

import { orders } from "../constants/orders.data";
import dayjs from "dayjs";

export function useOrdersFilters() {
  const [selectedType, setSelectedType] = useState("");

  const [selectedStatus, setSelectedStatus] = useState("");

  const [selectedDate, setSelectedDate] = useState("");

  const [calendarOpen, setCalendarOpen] = useState(false);

  const [activeDay, setActiveDay] = useState<number | null>(null);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [tempDate, setTempDate] = useState<dayjs.Dayjs | null>(null);
  const [typeOpen, setTypeOpen] = useState(false);

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const matchType = selectedType ? order.type === selectedType : true;

      const matchStatus = selectedStatus
        ? order.status === selectedStatus
        : true;

      return matchType && matchStatus;
    });
  }, [selectedType, selectedStatus]);

  const resetFilters = () => {
    setSelectedType("");
    setSelectedStatus("");
    setSelectedDate("");
    setActiveDay(null);
  };

  return {
    filteredOrders,

    selectedType,
    setSelectedType,

    selectedStatus,
    setSelectedStatus,

    selectedDate,
    setSelectedDate,

    calendarOpen,
    setCalendarOpen,

    activeDay,
    setActiveDay,

    anchorEl,
    setAnchorEl,
    tempDate,
    setTempDate,
    resetFilters,
    typeOpen,
    setTypeOpen,
  };
}
