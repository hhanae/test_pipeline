import React, { useState, useEffect } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

import Trophy from 'src/views/dashboard/Trophy'
import StatisticsProduct from 'src/views/dashboard/StatisticsProduct'
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview1'

function Dashboard() {
 

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <Trophy  />
        </Grid>
        {/* Pass the numberOfProducts to the StatisticsCard component */}
        <Grid item xs={12} md={8}>
          {/* Change from StatisticsProduct to StatisticsCard */}
          <StatisticsProduct />
        </Grid>
        <Grid item xs={12} md={6} lg={12}>
          <WeeklyOverview />
        </Grid>
        
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
