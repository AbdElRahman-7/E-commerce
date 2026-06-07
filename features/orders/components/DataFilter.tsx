
"use client";
import theme from '@/shared/theme/theme';
import { KeyboardArrowDown } from '@mui/icons-material';
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Button } from '@mui/material';
import dayjs from 'dayjs';
import { useState } from 'react';

const DataFilter = ({
  dateFilter,
  setDateFilter,
}: {
  dateFilter: string | null;
  setDateFilter: (value: string | null) => void;
}) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [tempDate, setTempDate] = useState<dayjs.Dayjs | null>(
    dateFilter ? dayjs(dateFilter) : null,
  );

  const dateLabel = dateFilter
    ? dayjs(dateFilter).format('MMM D, YYYY')
    : 'Date';

  return (
   <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div style={{ position: "relative" }}>
              <div
                onClick={() => {
                  setShowCalendar((prev) => {
                    const nextState = !prev;
                    if (!nextState) return nextState;
                    setTempDate(dateFilter ? dayjs(dateFilter) : null);
                    return nextState;
                  });
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 16px",
                  border: "1px solid #E5E7EB",
                  borderRadius: 4,
                  cursor: "pointer",
                  minWidth: 140,
                  justifyContent: "space-between",
                  backgroundColor: theme.palette.background.paper,
                }}
              >
                {dateLabel}
                <KeyboardArrowDown fontSize="small" />
              </div>
  
              {showCalendar && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    zIndex: 1000,
                    backgroundColor: theme.palette.background.paper,
                    boxShadow: theme.shadows[3],
                    marginTop: 8,
                    borderRadius: 4,
                  }}
                >
                  <StaticDatePicker
                    value={tempDate}
                    onChange={(newValue) => {
                      setTempDate(newValue ? dayjs(newValue) : null);
                    }}
                    slotProps={{
                      actionBar: {
                        actions: [],
                      },
                    }}
                  />
  
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      paddingBottom: 16,
                    }}
                  > 
                    <Button
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        borderRadius: 2,
  
                      }}
                      onClick={() => {
                        setDateFilter(
                          tempDate ? tempDate.format("YYYY-MM-DD") : null,
                        );
                        setShowCalendar(false);
                      }}
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </LocalizationProvider>
  )
}

export default DataFilter
