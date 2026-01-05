import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, BarChart3, Database, Zap, Shield, Users, FileText } from "lucide-react";
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

      {/* Hero */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="mb-8">
              <img
                src="/salesforce-screenshots/logo.png"
                alt="Puneeth Corp logo"
                className="h-12 mb-6"
              />
              <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-4">
                Puneeth Corp Sales CRM
              </h1>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-4xl leading-relaxed">
              A complete Salesforce Sales Cloud implementation demonstrating enterprise-level CRM administration, 
              process automation, and business intelligence. Built in a Developer Edition org to manage the entire 
              sales lifecycle from lead generation through closed deals.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge>Salesforce Sales Cloud</Badge>
              <Badge>CRM Administration</Badge>
              <Badge>Process Automation</Badge>
              <Badge>Reporting & Dashboards</Badge>
              <Badge>Business Process Design</Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Modules */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold text-foreground mb-12">Core Modules</h2>
            
            <div className="grid md:grid-cols-1 gap-16">
              {/* Dashboard */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Sales Performance Dashboard</h3>
                  <p className="text-muted-foreground text-base">
                    Lightning dashboard providing real-time visibility into pipeline health, win/loss metrics, lead status distribution, and open pipeline value. Includes 5+ visualizations tracking key sales metrics.
                  </p>
                </div>
                <img 
                  src="/salesforce-screenshots/dashboard-new.png" 
                  alt="Sales Dashboard" 
                  className="w-full rounded-lg border border-border shadow-lg hover:shadow-xl transition-shadow"
                  style={{ minHeight: "600px", objectFit: "cover" }}
                />
              </div>

              {/* Accounts & Contacts */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Accounts & Contacts Management</h3>
                  <p className="text-muted-foreground text-base">
                    360° customer view with linked accounts, contacts, opportunities, cases, and activities. Mobile-responsive layouts enable sales teams to manage customer relationships on the go.
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <img 
                    src="/salesforce-screenshots/Accounts.png" 
                    alt="Accounts" 
                    className="w-full rounded-lg border border-border shadow-lg hover:shadow-xl transition-shadow"
                    style={{ minHeight: "500px", objectFit: "cover" }}
                  />
                  <img 
                    src="/salesforce-screenshots/Contacts.png" 
                    alt="Contacts" 
                    className="w-full rounded-lg border border-border shadow-lg hover:shadow-xl transition-shadow"
                    style={{ minHeight: "500px", objectFit: "cover" }}
                  />
                  <img 
                    src="/salesforce-screenshots/accounts eg.png" 
                    alt="Account Details" 
                    className="w-full rounded-lg border border-border shadow-lg hover:shadow-xl transition-shadow"
                    style={{ minHeight: "500px", objectFit: "cover" }}
                  />
                </div>
              </div>

              {/* Leads */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Lead Management</h3>
                  <p className="text-muted-foreground text-base">
                    Prospect tracking system with defined stages: New → Contacted → Nurturing → Qualified → Unqualified. Custom fields capture budget, decision maker, and lead source for intelligent lead scoring.
                  </p>
                </div>
                <img 
                  src="/salesforce-screenshots/Leads.png" 
                  alt="Leads" 
                  className="w-full rounded-lg border border-border shadow-lg hover:shadow-xl transition-shadow"
                  style={{ minHeight: "550px", objectFit: "cover" }}
                />
              </div>

              {/* Products */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Product Catalog & Services</h3>
                  <p className="text-muted-foreground text-base">
                    Configurable product records for CRM Training, Cloud Migration, Security Upgrades, and custom service bundles. Enables sales teams to build accurate opportunity forecasts and deal sizing.
                  </p>
                </div>
                <img 
                  src="/salesforce-screenshots/Products.png" 
                  alt="Products" 
                  className="w-full rounded-lg border border-border shadow-lg hover:shadow-xl transition-shadow"
                  style={{ minHeight: "550px", objectFit: "cover" }}
                />
              </div>

              {/* Automation */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Process Automation with Flows</h3>
                  <p className="text-muted-foreground text-base">
                    20+ configured flows handling record-triggered automation, email alerts, task creation, and stage-based notifications. Reduces manual admin work and ensures consistent process execution across the sales org.
                  </p>
                </div>
                <img 
                  src="/salesforce-screenshots/Flows.png" 
                  alt="Flows" 
                  className="w-full rounded-lg border border-border shadow-lg hover:shadow-xl transition-shadow"
                  style={{ minHeight: "550px", objectFit: "cover" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold text-foreground mb-12">Skills Demonstrated</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Salesforce Administration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Custom fields, record types, page layouts, and validation rules</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Object relationships and data model design for B2B sales</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Mobile app configuration and responsive UI design</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Permission sets and sharing rules for role-based access</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    Process Automation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Record-triggered flows for stage transitions and notifications</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Screen flows for guided data entry and sales processes</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Email alerts and task automation based on business rules</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Error handling and retry logic for enterprise reliability</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    Reporting & Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Lightning dashboards with real-time pipeline metrics</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Custom reports for forecasting, win/loss analysis, and KPIs</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Visual representations for executive stakeholders</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Data-driven insights for sales strategy and forecasting</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-primary" />
                    Data Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Complete sample data (1000+ records across objects)</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Data quality rules and validation frameworks</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Realistic business scenarios and picklist values</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Data governance and field-level security</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
