import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, BarChart3, Database, Zap, Shield, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SalesforceDemo() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <a
            href="/#projects"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </a>
        </div>
      </header>

      {/* Hero - Compact */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="mb-6">
              <img
                src="/salesforce-screenshots/logo.png"
                alt="Puneeth Corp logo"
                className="h-10 mb-4"
              />
              <h1 className="text-4xl font-bold text-foreground mb-3">
                Puneeth Corp Sales CRM
              </h1>
            </div>
            <p className="text-base text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              Enterprise Salesforce Sales Cloud implementation demonstrating CRM administration, process automation, and business intelligence.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge>Salesforce Sales Cloud</Badge>
              <Badge>CRM Administration</Badge>
              <Badge>Process Automation</Badge>
              <Badge>Reporting & Dashboards</Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Modules */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-12">Core Modules</h2>
            
            <div className="space-y-16">
              {/* Dashboard */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Sales Performance Dashboard</h3>
                  <p className="text-muted-foreground">
                    Real-time pipeline visibility with win/loss metrics, lead status, and open pipeline value.
                  </p>
                </div>
                <img 
                  src="/salesforce-screenshots/dashboard-new.png" 
                  alt="Sales Dashboard" 
                  className="w-full rounded-lg border border-border shadow-lg"
                />
              </div>

              {/* Accounts */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Accounts Management</h3>
                  <p className="text-muted-foreground">
                    Complete account hierarchy with related contacts, opportunities, cases, and activity timeline.
                  </p>
                </div>
                <img 
                  src="/salesforce-screenshots/Accounts.png" 
                  alt="Accounts" 
                  className="w-full rounded-lg border border-border shadow-lg"
                />
              </div>

              {/* Contacts */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Contacts & Communication</h3>
                  <p className="text-muted-foreground">
                    Contact management with email, phone, and interaction history integrated with opportunities.
                  </p>
                </div>
                <img 
                  src="/salesforce-screenshots/Contacts.png" 
                  alt="Contacts" 
                  className="w-full rounded-lg border border-border shadow-lg"
                />
              </div>

              {/* Account Details */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Account Details & Analytics</h3>
                  <p className="text-muted-foreground">
                    Deep-dive view with account health, opportunity pipeline, and customer metrics.
                  </p>
                </div>
                <img 
                  src="/salesforce-screenshots/accounts eg.png" 
                  alt="Account Details" 
                  className="w-full rounded-lg border border-border shadow-lg"
                />
              </div>

              {/* Leads */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Lead Management</h3>
                  <p className="text-muted-foreground">
                    Prospect tracking: New → Contacted → Nurturing → Qualified → Unqualified
                  </p>
                </div>
                <img 
                  src="/salesforce-screenshots/Leads.png" 
                  alt="Leads" 
                  className="w-full rounded-lg border border-border shadow-lg"
                />
              </div>

              {/* Products */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Product Catalog</h3>
                  <p className="text-muted-foreground">
                    Service offerings: CRM Training, Cloud Migration, Security Upgrades, custom bundles.
                  </p>
                </div>
                <img 
                  src="/salesforce-screenshots/Products.png" 
                  alt="Products" 
                  className="w-full rounded-lg border border-border shadow-lg"
                />
              </div>

              {/* Automation */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Process Automation</h3>
                  <p className="text-muted-foreground">
                    20+ flows: record-triggered automation, email alerts, task creation, stage notifications.
                  </p>
                </div>
                <img 
                  src="/salesforce-screenshots/Flows.png" 
                  alt="Flows" 
                  className="w-full rounded-lg border border-border shadow-lg"
                />
              </div>

              {/* Home Page */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Home & Navigation</h3>
                  <p className="text-muted-foreground">
                    Personalized home page with quick links, recent items, and key metrics overview.
                  </p>
                </div>
                <img 
                  src="/salesforce-screenshots/home-page.png" 
                  alt="Home Page" 
                  className="w-full rounded-lg border border-border shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground mb-12">Key Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <BarChart3 className="w-6 h-6 mb-2 text-primary" />
                <CardTitle>Real-time Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Dynamic dashboards tracking pipeline, win rates, and forecasting with custom metrics.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="w-6 h-6 mb-2 text-primary" />
                <CardTitle>Workflow Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Flow-based automation reducing manual tasks and ensuring consistent processes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="w-6 h-6 mb-2 text-primary" />
                <CardTitle>Collaboration Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Chatter, activity tracking, and communication history integrated with records.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="w-6 h-6 mb-2 text-primary" />
                <CardTitle>Security & Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Role-based access, audit trails, and data encryption for enterprise compliance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
