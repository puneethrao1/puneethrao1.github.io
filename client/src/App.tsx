import { Switch, Route } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "./pages/home";
import SalesforceDemo from "./pages/salesforce-demo";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div hook={useHashLocation}>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/salesforce-demo" component={SalesforceDemo} />
          </Switch>
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
