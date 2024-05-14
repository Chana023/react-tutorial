import Accordion from "./components/Accordion";

function App() {
    const items = [
        {
            id: 'l2kj5',
            label: "Can I use React on a project?",
            content: 'You can use react on any project you want. You can use react on any project you want. You can use react on any project you want.'

        },
        {
            id: 'adgg3',
            label: "Can I use React on a project?",
            content: 'You can use react on any project you want. You can use react on any project you want. You can use react on any project you want.'

        },
        {
            id: 'eu6yt',
            label: "Can I use React on a project?",
            content: 'You can use react on any project you want. You can use react on any project you want. You can use react on any project you want.'

        }
    ]
    
    return <Accordion items={items} />;
}

export default App;