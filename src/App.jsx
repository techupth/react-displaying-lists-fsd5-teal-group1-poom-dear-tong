import "./App.css";
import { Displaymovies } from "./components/Displaymovies";
import { Displayteams } from "./components/Displayteams";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
function App() {
  return (
    <>
      <Tabs isFitted variant="enclosed">
        <TabList lg>
          <Tab>Movies</Tab>
          <Tab>Teams</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div className="App">
              <h1>Movie List Section</h1>
              <section className="movie-list-section">
                <Displaymovies />
              </section>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="App">
              <h1>Team List Section</h1>
              <Displayteams />
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default App;
