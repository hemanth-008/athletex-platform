"use client"

import * as React from "react"
import { formatDistanceToNow } from "date-fns"
import { Heart, MessageCircle, Share2, MoreHorizontal, BadgeCheck, Play } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface PostCardProps {
  post: {
    id: string;
    title: string;
    description: string;
    difficulty: "easy" | "medium" | "hard" | "elite";
    points_earned: number;
    media_url?: string;
    media_type?: "image" | "video";
    created_at: string;
    likes_count: number;
    comments_count: number;
    athlete: {
      username: string;
      full_name: string;
      avatar_url?: string;
      sport: string;
      is_verified: boolean;
    }
  }
}

export default function PostCard({ post }: PostCardProps) {
  const [isLiked, setIsLiked] = React.useState(false);
  const [likes, setLikes] = React.useState(post.likes_count);

  const handleLike = () => {
    // In a real app, this calls Supabase to toggle post_likes
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <Card className="mb-6 overflow-hidden border-border bg-card">
      {/* Header */}
      <div className="p-4 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={post.athlete.avatar_url} />
            <AvatarFallback className="bg-primary/10 text-primary">{post.athlete.full_name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-semibold">{post.athlete.full_name}</span>
              {post.athlete.is_verified && <BadgeCheck className="w-4 h-4 text-primary" />}
              <span className="text-muted-foreground text-sm">@{post.athlete.username}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
              <span>{post.athlete.sport}</span>
              <span>•</span>
              <span>{formatDistanceToNow(new Date(post.created_at), { addSuffix: true })}</span>
            </div>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <MoreHorizontal className="w-5 h-5" />
        </Button>
      </div>

      {/* Content */}
      <div className="px-4 pb-3">
        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
        {post.description && <p className="text-muted-foreground text-sm mb-4">{post.description}</p>}
        
        <Badge variant={post.difficulty} className="mb-4">
          {post.difficulty.toUpperCase()} • +{post.points_earned} PTS
        </Badge>
      </div>

      {/* Media */}
      {post.media_url && (
        <div className="relative w-full aspect-video bg-muted flex items-center justify-center overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={post.media_url} 
            alt="Achievement Media" 
            className="w-full h-full object-cover"
          />
          {post.media_type === 'video' && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
            </div>
          )}
        </div>
      )}

      {/* Footer Actions */}
      <div className="p-4 flex items-center justify-between border-t border-border">
        <div className="flex gap-4">
          <Button 
            variant="ghost" 
            size="sm" 
            className={cn("gap-2 text-muted-foreground hover:text-primary", isLiked && "text-primary")}
            onClick={handleLike}
          >
            <Heart className={cn("w-5 h-5", isLiked && "fill-current")} />
            <span>{likes}</span>
          </Button>
          <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
            <MessageCircle className="w-5 h-5" />
            <span>{post.comments_count}</span>
          </Button>
        </div>
        <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
          <Share2 className="w-5 h-5" />
          <span>Share</span>
        </Button>
      </div>
    </Card>
  )
}
