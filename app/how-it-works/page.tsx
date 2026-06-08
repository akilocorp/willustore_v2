import {
  Database, Lock, Network, Search, Wifi,
  Cpu, Server, ArrowRight, Shield, Zap, ChevronRight
} from 'lucide-react'
import { Button, Badge } from '../../components/Button'
import SectionHeader from '../../components/SectionHeader'

export const metadata = {
  title: 'How It Works — Willustore',
  description: "A technical deep-dive into Willustore's decentralized vector storage — HNSW indexing, gossip protocol, encryption, and retrieval.",
}

const steps = [
  {
    num: '01', icon: Database, color: 'accent',
    title: 'Data Vectorization', subtitle: 'Your AI generates embeddings',
    desc: 'Your application (a RAG pipeline, semantic search engine, or AI assistant) generates vector embeddings from raw data — documents, images, user behavior — using models like OpenAI, HuggingFace, or your own.',
    detail: 'These high-dimensional vectors (typically 384–1536 dimensions) are the fingerprints of your data. They capture semantic meaning in a format that can be searched and compared at scale.',
    code: `// Example: Generating embeddings
const embedding = await openai.embeddings.create({
  model: "text-embedding-ada-002",
  input: "Willustore decentralized storage"
});

// Send to Willustore
await willustore.upsert({
  id: "doc_001",
  vector: embedding.data[0].embedding,
  metadata: { source: "docs", org: "acme-corp" }
});`,
  },
  {
    num: '02', icon: Lock, color: 'purple',
    title: 'Fragmentation & Encryption', subtitle: 'Split, encrypt, never expose',
    desc: "Before any data leaves the central orchestration server, it is split into fragments using a secret sharing scheme (similar to Shamir's Secret Sharing). Each fragment is independently encrypted with AES-256-GCM.",
    detail: 'Critically, no single device ever holds enough fragments to reconstruct the original vector. A configurable threshold (e.g., 3 of 5 fragments) is required for reconstruction.',
    code: `// Conceptual fragmentation logic
function fragmentAndEncrypt(vector, k=3, n=5) {
  const shares = shamirSplit(vector, k, n);
  return shares.map(share => ({
    encrypted: aes256gcm.encrypt(share, orgKey),
    fragment_id: uuid(),
    threshold_k: k,
    total_n: n,
  }));
}`,
  },
  {
    num: '03', icon: Network, color: 'green',
    title: 'Distributed Storage via Gossip', subtitle: 'Spread across trusted devices',
    desc: 'The central index uses a gossip protocol to discover available participating devices on your network. Encrypted fragments are distributed to devices with available storage, prioritizing proximity.',
    detail: 'The gossip protocol ensures fault tolerance — as devices join and leave, fragments are automatically rebalanced. The system maintains redundancy so even if 40% of devices go offline, all data remains retrievable.',
    code: `// Gossip protocol node discovery
class GossipNode {
  async broadcast() {
    const peers = await this.discover();
    const healthyPeers = peers.filter(p => p.storage > MIN_STORAGE);
    await this.distributeFragments(fragments, healthyPeers);
  }

  async handleFragment(fragment) {
    await this.storage.save(fragment.id, fragment.encrypted);
    await this.ackToIndex(fragment.id, this.nodeId);
  }
}`,
  },
  {
    num: '04', icon: Cpu, color: 'accent',
    title: 'HNSW Indexing', subtitle: 'Lightning-fast vector search',
    desc: 'The central index maintains an HNSW (Hierarchical Navigable Small World) graph — a state-of-the-art approximate nearest neighbor data structure. It stores only vector IDs and fragment location metadata, never the raw vectors.',
    detail: 'HNSW achieves O(log n) query complexity with recall rates above 98%. This means even with millions of vectors distributed across hundreds of devices, search queries resolve in under 10 milliseconds.',
    code: `// HNSW index stores only metadata
const index = new HNSWIndex({ dimensions: 1536, ef: 200 });

// On insert: register location, not data
index.add(vector_id, {
  fragment_locations: ["device:a1b2", "device:c3d4"],
  threshold: 3,
  timestamp: Date.now(),
});

// On query: find nearest IDs, then fetch fragments
const nearestIds = index.search(queryVector, topK=10);`,
  },
  {
    num: '05', icon: Wifi, color: 'purple',
    title: 'Retrieval via WiFi / Bluetooth', subtitle: 'Local network, maximum speed',
    desc: 'When your application issues a vector query, the index resolves which devices hold the required fragments. The client agent fetches fragments from nearby devices using WiFi (LAN) or Bluetooth — no internet round-trips needed.',
    detail: 'This local-first retrieval model means campus or office deployments see latency under 5ms for most queries.',
    code: `// Local retrieval priority
async function retrieveFragments(fragmentLocations) {
  const localPeers = fragmentLocations.filter(
    loc => isOnSameSubnet(loc.ip) || isBluetooth(loc)
  );

  // Prefer local peers (< 5ms latency)
  const fragments = await Promise.all(
    localPeers.map(peer => peer.fetchFragment())
  );

  return shamirReconstruct(fragments, threshold=3);
}`,
  },
  {
    num: '06', icon: Search, color: 'green',
    title: 'Secure Reconstruction & Response', subtitle: 'Assemble, decrypt, deliver',
    desc: "Retrieved fragments are sent to the client's local agent, where they are assembled using the secret sharing reconstruction algorithm and decrypted. The original vector is returned to your application — the raw data never touched any server.",
    detail: 'The entire retrieval pipeline from query to response typically completes in under 20 milliseconds for same-network deployments.',
    code: `// Client-side reconstruction
async function resolveQuery(queryVector) {
  const nearestIds = await index.search(queryVector);
  const fragmentSets = await fetchAllFragments(nearestIds);

  return fragmentSets.map(({ fragments, key }) => ({
    vector: aes256gcm.decrypt(
      shamirReconstruct(fragments),
      key
    ),
    metadata: fragments[0].metadata,
  }));
}`,
  },
]

export default function HowItWorksPage() {
  return (
    <div className="pt-24">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(110,91,255,0.07) 0%, transparent 60%)' }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <Badge>Technical Overview</Badge>
          <h1 className="font-display font-800 text-5xl md:text-6xl leading-tight mt-6 mb-6">
            Under the Hood: <span className="gradient-text">How Willustore Works</span>
          </h1>
          <p className="text-text-secondary text-xl leading-relaxed max-w-2xl mx-auto mb-6">
            A step-by-step walkthrough of decentralized vector storage — from embedding generation to sub-millisecond retrieval.
          </p>
          <div className="flex items-center justify-center gap-8 mt-10 flex-wrap">
            {[{ label: 'End-to-end encryption', icon: Lock }, { label: 'HNSW indexing', icon: Cpu }, { label: 'Gossip protocol', icon: Network }, { label: 'Local retrieval', icon: Wifi }].map(({ label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-text-dim">
                <Icon size={14} className="text-accent" />{label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="glass border-glow rounded-2xl p-8 overflow-x-auto">
            <div className="flex items-center gap-3 min-w-max mx-auto w-fit">
              {['Vectorize', 'Fragment', 'Encrypt', 'Distribute', 'Index', 'Query', 'Retrieve', 'Reconstruct'].map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <div className="text-center">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-2">
                      <span className="text-xs font-mono text-accent">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <span className="text-xs text-text-dim whitespace-nowrap">{step}</span>
                  </div>
                  {i < 7 && <ArrowRight size={14} className="text-accent/30" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="space-y-16">
            {steps.map(({ num, icon: Icon, color, title, subtitle, desc, detail, code }, idx) => {
              const colorMap: Record<string, { text: string; bg: string; border: string }> = {
                accent: { text: 'text-accent', bg: 'bg-accent/10', border: 'border-accent/20' },
                purple: { text: 'text-accent-purple', bg: 'bg-accent-purple/10', border: 'border-accent-purple/20' },
                green: { text: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/20' },
              }
              const colors = colorMap[color] ?? colorMap.accent

              return (
                <div key={num} className={`grid lg:grid-cols-2 gap-12 items-start ${idx % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  <div className={idx % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`font-mono text-sm font-600 ${colors.text} opacity-60`}>{num}</span>
                      <div className={`h-px flex-1 bg-gradient-to-r from-current to-transparent opacity-20 ${colors.text}`} />
                    </div>
                    <div className={`inline-flex p-3 rounded-xl ${colors.bg} border ${colors.border} mb-5`}>
                      <Icon size={24} className={colors.text} />
                    </div>
                    <h2 className="font-display font-700 text-3xl text-text-primary mb-1">{title}</h2>
                    <p className={`text-sm font-mono mb-5 ${colors.text}`}>{subtitle}</p>
                    <p className="text-text-secondary leading-relaxed mb-4">{desc}</p>
                    <p className="text-text-dim text-sm leading-relaxed">{detail}</p>
                  </div>
                  <div className={idx % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="glass rounded-2xl overflow-hidden border border-border-subtle">
                      <div className="flex items-center gap-2 px-5 py-3 border-b border-border-subtle bg-navy/60">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-500/60" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                          <div className="w-3 h-3 rounded-full bg-green-500/60" />
                        </div>
                        <span className="text-xs font-mono text-text-dim ml-2">willustore.js</span>
                      </div>
                      <pre className="p-6 text-xs font-mono text-text-secondary leading-relaxed overflow-x-auto">
                        <code>{code}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeader badge="Security Model" title={<>Defense in <span className="gradient-text">Depth</span></>} subtitle="Multiple independent layers of security ensure that even if one layer is compromised, your data remains protected." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {[
              { icon: Lock, title: 'AES-256-GCM Encryption', desc: 'Every fragment is encrypted with a unique key derived from your organization master key. Authenticated encryption prevents tampering.' },
              { icon: Shield, title: 'Secret Sharing Threshold', desc: "Shamir's Secret Sharing means n-of-k fragments are required for reconstruction. Individual device compromise is insufficient." },
              { icon: Network, title: 'Zero-Knowledge Index', desc: 'The central index holds only IDs and device metadata — never raw vector data. Index compromise reveals nothing sensitive.' },
              { icon: Zap, title: 'Mutual TLS Authentication', desc: "All device-to-index and device-to-device communication requires mutual TLS with certificates issued by your org's CA." },
              { icon: Server, title: 'Audit Logging', desc: 'Every read, write, and device join/leave event is cryptographically signed and logged. Full traceability for compliance.' },
              { icon: Cpu, title: 'Hardware Attestation', desc: 'Devices can optionally require TPM-based attestation before joining the network, ensuring only trusted hardware participates.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glass border-glow rounded-xl p-6 hover:border-accent/30 transition-all">
                <Icon size={20} className="text-accent mb-4" />
                <h3 className="font-display font-600 text-text-primary mb-2">{title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display font-700 text-4xl mb-4">Ready to Try It <span className="gradient-text">Yourself?</span></h2>
          <p className="text-text-secondary text-lg mb-8">Our documentation and SDK make integration straightforward. Deploy your first private vector store in under an hour.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">Request Access</Button>
            <Button href="/product" variant="secondary" size="lg">View Product <ChevronRight size={16} /></Button>
          </div>
        </div>
      </section>
    </div>
  )
}
