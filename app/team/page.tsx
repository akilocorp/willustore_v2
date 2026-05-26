import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const team: {
  name: string;
  role: string;
  bio: string;
}[] = [];

export default function TeamPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="paper-grain bg-cream pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="mx-auto max-w-[1240px] px-6">
            <div className="max-w-[600px]">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Our Team
              </div>
              <h1 className="mt-4 text-balance text-[clamp(40px,6vw,72px)] leading-[1.02] tracking-[-0.015em] text-ink">
                The People{" "}
                <span className="serif-italic text-green">Building</span> the
                Network
              </h1>
              <p className="mt-6 text-[17px] leading-[1.6] text-muted">
                A small, focused team on a mission to decentralize the future of
                AI infrastructure.
              </p>
            </div>

            {team.length > 0 ? (
              <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {team.map((member) => (
                  <div
                    key={member.name}
                    className="rounded-2xl border border-hairline bg-cream-warm p-7"
                  >
                    <div className="h-14 w-14 rounded-full bg-hairline mb-4" />
                    <div className="text-[17px] font-medium text-ink">
                      {member.name}
                    </div>
                    <div className="mt-0.5 font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
                      {member.role}
                    </div>
                    <p className="mt-3 text-[14px] leading-[1.6] text-muted">
                      {member.bio}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-16 rounded-2xl border border-hairline bg-cream-warm p-12 text-center">
                <p className="text-[15px] text-muted">
                  Team profiles coming soon.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
