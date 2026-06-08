import Link from 'next/link'

export function Button({ href, onClick = undefined, children, variant = 'primary', className = '', size = 'md', ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 font-600 rounded-lg transition-all duration-200 cursor-pointer outline-none'

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const variants = {
    primary: 'border-0 bg-accent text-white hover:bg-accent-glow hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5 active:translate-y-0',
    secondary: 'border border-accent/40 text-accent bg-accent/5 hover:bg-accent/10 hover:border-accent/60 hover:-translate-y-0.5',
    ghost: 'border-0 text-text-secondary hover:text-accent hover:bg-accent/5',
    purple: 'border-0 bg-accent-warm text-white hover:bg-accent hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5',
  }

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  if (href) {
    return <Link href={href} className={classes} {...props}>{children}</Link>
  }

  return <button onClick={onClick} className={classes} {...props}>{children}</button>
}

export function Badge({ children, color = 'accent' }) {
  const colors = {
    accent: 'bg-accent/10 text-accent border-accent/20',
    purple: 'bg-accent-purple/10 text-accent-purple border-accent-purple/20',
    green: 'bg-green-500/10 text-green-400 border-green-500/20',
  }
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-600 font-mono tracking-wider rounded-full border ${colors[color]}`}>
      {children}
    </span>
  )
}
