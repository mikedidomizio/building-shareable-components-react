import Home from "./pages/Home";
import { client } from "./apollo/client";
import { ApolloProvider } from "@apollo/client";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <div className="p-10">
        <Home />
      </div>
    </ApolloProvider>
  );
}
