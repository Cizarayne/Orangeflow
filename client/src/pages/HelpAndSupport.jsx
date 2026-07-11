import ReportIssueDropdown from "../components/ReportIssueDropdown"
import FAQ from "../components/FAQ"
import CommunityGuidelines from "../components/CommunityGuidelines"
import CopyrightPolicy from "../components/CopyrightPolicy"
export default function HelpAndSupport() {
  return (
    <div>
      <ReportIssueDropdown />
      <CommunityGuidelines />
      <CopyrightPolicy />
      <FAQ />
    </div>
  )
}
