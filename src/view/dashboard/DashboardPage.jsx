import React from 'react';
import { i18n } from '../../i18n';
import DashboardBarChart from '../dashboard/DashboardBarChart';
import DashboardDoughnutChart from '../dashboard/DashboardDoughnutChart';
import DashboardHorizontalBarChart from '../dashboard/DashboardHorizontalBarChart';
import DashboardLineChart from '../dashboard/DashboardLineChart';
import DashboardMixChartOne from '../dashboard/DashboardMixChartOne';
import DashboardMixChartTwo from '../dashboard/DashboardMixChartTwo';
import DashboardPolarChart from '../dashboard/DashboardPolarChart';
import DashboardRadarChart from '../dashboard/DashboardRadarChart';

const DashboardPage = (props) => {
  return (
    <>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <div className="bg-white dark:bg-gray-800 p-2 border dark:border-gray-600 rounded">
              <DashboardDoughnutChart />
            </div>
          </div>
          <div>
            <div className="bg-white dark:bg-gray-800 p-2 border dark:border-gray-600 rounded">
              <DashboardMixChartTwo />
            </div>
          </div>
          <div>
            <div className="bg-white dark:bg-gray-800 p-2 border dark:border-gray-600 rounded">
              <DashboardBarChart />
            </div>
          </div>
          <div>
            <div className="bg-white dark:bg-gray-800 p-2 border dark:border-gray-600 rounded">
              <DashboardMixChartOne />
            </div>
          </div>
          <div>
            <div className="bg-white dark:bg-gray-800 p-2 border dark:border-gray-600 rounded">
              <DashboardPolarChart />
            </div>
          </div>
          <div>
            <div className="bg-white dark:bg-gray-800 p-2 border dark:border-gray-600 rounded">
              <DashboardHorizontalBarChart />
            </div>
          </div>
          <div>
            <div className="bg-white dark:bg-gray-800 p-2 border dark:border-gray-600 rounded">
              <DashboardLineChart />
            </div>
          </div>
          <div>
            <div className="bg-white dark:bg-gray-800 p-2 border dark:border-gray-600 rounded">
              <DashboardRadarChart />
            </div>
          </div>
        </div>

        <div className="mt-4 w-full text-center text-gray-500">
          {i18n('dashboard.message')}
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
