import React from 'react';
import {
  View,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
} from 'react-native';
import SearchBar from '../JobList/searchBar';
import JobTypeFilter from '../JobList/jobTypeFilter';
import MapListToggle from '../JobList/mapListToggle';
import JobTile from '../JobList/JobTile';
import AddJobButton from '../JobList/AddJob/AddJobButton';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    marginTop: 0.5 * width,
  },
});

class JobList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      jobData: [],
      counter: 0,
    };
  }

  componentDidMount() {
    const { updateJobs } = this.props;
    updateJobs();
  }

  AddButton() {
    return (<AddJobButton navigator={this.props.navigator} />);
  }

  render() {
    const { jobs, goToJob } = this.props;
    const loading = !jobs;
    return (
      <View>
        <View>
          <SearchBar rightButton={this.AddButton()} />
        </View>
        <JobTypeFilter />
        <MapListToggle />
        { !loading &&
          <ScrollView>
            {jobs.map((job, i) =>
              (<JobTile
                job={job}
                key={i}
                pressJob={() => { goToJob(job); }}
              />))}
          </ScrollView>
        }
        { loading &&
          <ActivityIndicator
            animating={this.state.animating}
            style={[styles.centering, { height: 80 }]}
            size="large"
            color="black"
          />
        }
      </View>
    );
  }
}

JobList.propTypes = {
  updateJobs: React.PropTypes.func.isRequired,
  jobs: React.PropTypes.array.isRequired,
  goToJob: React.PropTypes.func.isRequired,
  navigator: React.PropTypes.object,
};

export default JobList;
