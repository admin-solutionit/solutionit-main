/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/oracle-erp-ebs-and-cloud-staffing-new",
        destination: "/oracle-erp-practice",
        permanent: true,
      },
      {
        source: "/remote-it-staffing",
        destination: "/services/remote-model",
        permanent: true,
      },
      {
        source: "/oracle-technical-services",
        destination: "/oracle-erp-practice/technical",
        permanent: true,
      },
      {
        source: "/oracle-cloud-integration-services",
        destination: "/oracle-erp-practice/technical",
        permanent: true,
      },
      {
        source: "/oracle-soa-suite",
        destination: "/oracle-erp-practice/technical",
        permanent: true,
      },
      {
        source: "/oracle-reporting",
        destination: "/oracle-erp-practice/technical",
        permanent: true,
      },
      {
        source: "/oracle-user-interfaces",
        destination: "/oracle-erp-practice/technical",
        permanent: true,
      },
      {
        source: "/oracle-ebs-cloud-services",
        destination: "/oracle-erp-practice/solutions",
        permanent: true,
      },
      {
        source: "/careers-2",
        destination: "/for-consultants",
        permanent: true,
      },
      {
        source: "/apply-online",
        destination: "/for-consultants/apply",
        permanent: true,
      },
      {
        source: "/internal-positions",
        destination: "/for-consultants",
        permanent: true,
      },
      { source: "/contact-simple", destination: "/contact", permanent: true },
      { source: "/contact-simple", destination: "/contact", permanent: true },
      {
        source: "/current-openings",
        destination: "/careers/current-openings/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
