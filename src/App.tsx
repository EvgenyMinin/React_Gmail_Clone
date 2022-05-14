import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useAppSelector } from "./app/hooks";
import { Header, messageIsOpenSelector, SendMail, Sidebar } from "./widgets";
import { Main, Mail } from "./pages";

import styles from "./styles.module.css";

function App() {
    const messageIsOpen = useAppSelector(messageIsOpenSelector);

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
                            <Main />
                        </Route>
                    </Switch>
                </div>

                {messageIsOpen && <SendMail />}
            </div>
        </Router>
    );
}

export default App;
