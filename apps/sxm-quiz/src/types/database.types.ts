export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      quiz: {
        Row: {
          completed: number | null
          id: number
          slug: string | null
        }
        Insert: {
          completed?: number | null
          id?: number
          slug?: string | null
        }
        Update: {
          completed?: number | null
          id?: number
          slug?: string | null
        }
        Relationships: []
      }
      scores: {
        Row: {
          id: number
          quiz_slug: string
          score: number
        }
        Insert: {
          id?: number
          quiz_slug: string
          score: number
        }
        Update: {
          id?: number
          quiz_slug?: string
          score?: number
        }
        Relationships: [
          {
            foreignKeyName: "scores_quiz_slug_fkey"
            columns: ["quiz_slug"]
            referencedRelation: "quiz"
            referencedColumns: ["slug"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
