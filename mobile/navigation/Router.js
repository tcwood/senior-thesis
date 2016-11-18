/*
  ===================================================================
  THIS IS THE NEW ROUTER FILE: HAD TO MAKE ONE FOR THE REDUX OVERHAUL
  ===================================================================
*/

import {
  createRouter,
} from '@exponent/ex-navigation';

import ProfileScreen from '../Profile/Profile';
import JobListScreen from '../JobList/JobList';
import WorkerListScreen from '../WorkerList/WorkerList';
import Messages from '../Messages/Messages';
import NavigationBar from './NavigationBar';
import JobProfileScreen from '../JobProfile/Profile';
import AddJob from '../JobList/AddJob/AddJob';
import AddJobWhatWhereWhen from '../JobList/AddJob/AddJobWhatWhereWhen';
import AddJobDetails from '../JobList/AddJob/AddJobDetails';
import EntryScreen from '../containers/Entry';

export default createRouter(() => ({
  profile: () => ProfileScreen,
  jobList: () => JobListScreen,
  jobProfile: () => JobProfileScreen,
  workerList: () => WorkerListScreen,
  messages: () => Messages,
  navigationBar: () => NavigationBar,
  addJob: () => AddJob,
  addJobWhatWhereWhen: () => AddJobWhatWhereWhen,
  addJobDetails: () => AddJobDetails,
  entry: () => EntryScreen,
}));
