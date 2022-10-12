import React from 'react';

const Blog = () => {
    return (
        <div>
            <body className="container bg-black border border-dark">
                <header>
                    <h2 className="text-white font-bold my-4 py-4 text-3xl">Important questions and their answers regarding Reactjs and React Router</h2>
                </header>
                <main>
                    <section className="border border-dark text-white p-4">
                        <div>
                            <h3 className="font-bold text-xl">1.What is the purpose of react router?</h3>
                            <p className='text-lg'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                                React Router is a dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.
                                React router also allows the user to utilize browser functionality like the back button and the refresh page while maintaining the correct view of the application.</p>
                        </div>
                    </section>
                    <section className="border border-dark text-white p-4">
                        <div>
                            <h3 className="font-bold text-xl">2.How does context API works?</h3>
                            <p className='text-lg'>Context API is a new feature added in version 16.3 of React that allows one to share state across the entire app lightly and with ease.
                                The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.
                                React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
                                steps of using context API:
                            </p>
                            <ol className='list-disc ml-4'>
                                <li>Create a folder under your app root named contexts</li>
                                <li>Create a file named Context</li>
                                <li>import and create a context </li>
                                <li>Create a component that will wrap the provider named Provider</li>
                                <li>Create a higher order component to consume the context named: with e.g. withUser</li>
                                <li>Finally export them</li>
                            </ol>
                        </div>
                    </section>
                    <section className="border border-dark text-white p-4">
                        <div>
                            <h3 className="font-bold text-xl">3.What is useRef hook and how does it work?</h3>
                            <p className='text-lg'>The useRef Hook is a function that returns a mutable ref object whose .current property is initialized with the passed argument (initialValue).
                                The returned object will persist for the full lifetime of the component.
                            </p><br />
                            <p>There are two main uses of useRef:</p>
                            <ol className='list-disc ml-4'>
                                <li>Accessing the DOM nodes or React elements</li>
                                <li>storing mutable variables (like with instance variables in class components).</li>
                            </ol>
                            <p>There are 2 rules to remember about references:
                                <li>The value of the reference is persisted (stays the same) between component re-renderings;</li>
                                <li>Updating a reference doesn't trigger a component re-rendering.</li>
                            </p>

                        </div>
                    </section>
                </main>

            </body>
        </div>
    );
};

export default Blog;