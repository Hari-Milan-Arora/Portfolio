import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-shell flex min-h-[70vh] items-center justify-center py-20">
      <div className="panel-strong max-w-2xl rounded-[2rem] px-8 py-10 text-center">
        <p className="eyebrow justify-center">404</p>
        <h1 className="mt-5 text-balance text-4xl font-semibold text-white sm:text-5xl">
          That page is not part of the operating system.
        </h1>
        <p className="mt-5 text-pretty leading-7 text-slate-300">
          The signal is elsewhere. Head back to the main site and continue from
          there.
        </p>
        <Link className="button-primary mt-8" href="/">
          Return Home
        </Link>
      </div>
    </div>
  );
}
