export default function CurrentOpeningCard({
  jobTitle,
  jobRef,
  jobDesc,
  jobManager,
  jobSalary,
  jobBenefits,
  joblocation,
}) {
  return (
    <article className="border-b border-zinc-300 py-10">
      <div className="mx-auto max-w-7xl text-[18px] leading-[1.4] text-[#222]">
        {/* Title */}
        <p>
          <span className="text-[24px] font-bold">{jobTitle}</span>
        </p>

        {/* Ref Code */}
        <p className="font-bold">
          Reference code:<span className="font-normal"> {jobRef}</span>
        </p>

        {/* Description */}
        <p className="mt-4">{jobDesc}</p>

        {/* Wage */}
        <p className="mt-4">
          <span className="font-bold">Offered wage:</span> {jobSalary}
        </p>

        <p className="mt-4">
          <span className="font-bold">Benefits:</span> {jobBenefits}
        </p>

        {/* Work Site */}
        <p>
          <span className="font-bold">Work site:</span> {joblocation}
        </p>

        {/* Apply */}
        <p className="mt-4">
          Send resume using reference code {jobRef} to: {jobManager}, Solution
          IT, Inc., 187 Ballardvale St., Suite A215, Wilmington, MA 01887.
        </p>
      </div>
    </article>
  );
}
