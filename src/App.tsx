import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header, Sidebar } from "./widgets";
import { EmailList, Mail } from "./pages";

import styles from "./styles.module.css";

function App() {
    return (
        <Router>
            <div>
                <Header />

                <div className={styles.app}>
                    <Sidebar />

                    <Switch>
                        <Route path="/mail">
                            <Mail />
                        </Route>
                        <Route path="/">
                            <EmailList />
                        </Route>
                    </Switch>
                </div>
                <h2>Let's build Gmail</h2>
            </div>
        </Router>
    );
}

export default App;
