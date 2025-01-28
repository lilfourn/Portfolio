import { Avatar, AvatarImage, AvatarFallback } from "./avatar"

interface AuthorAvatarProps {
  name: string;
  showOnlineStatus?: boolean;
}

export function AuthorAvatar({ name, showOnlineStatus = true }: AuthorAvatarProps) {
  return (
    <div className="relative mr-3 inline-flex leading-none">
      <Avatar className="font-size-0 bg-zinc-800/80 backdrop-blur-sm">
        <AvatarImage 
          src="/transparentbg-portrait.svg" 
          alt={`${name}'s profile picture`}
          className="block align-bottom"
          style={{ 
            display: 'block', 
            verticalAlign: 'bottom'
          }}
        />
        <AvatarFallback className="leading-none bg-zinc-800/80 backdrop-blur-sm text-zinc-200">
          {name.split(' ').map(n => n[0]).join('')}
        </AvatarFallback>
      </Avatar>
      {showOnlineStatus && (
        <div 
          className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-zinc-900 bg-emerald-500"
          aria-hidden="true"
        >
          <span className="sr-only">{name} is online</span>
        </div>
      )}
    </div>
  );
}
