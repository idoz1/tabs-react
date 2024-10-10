import { useEffect, useState } from "react";
import JobInfo from "./components/JobInfo";

const url = 'https://www.course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [jobs, setJobs] = useState([])

  const fetchJobs = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const newJobs = await response.json();
      setJobs(newJobs);
    } catch (error) {
      console.error('Fetch error:', error);
    }
    setIsLoading(false);
  }
  

  useEffect(() => {
    fetchJobs();
  }, [])

  if(isLoading){
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    )
  }

  return (
    <section className="jobs-center">
      <JobInfo jobs={jobs} />
    </section>
  );
};
export default App;
