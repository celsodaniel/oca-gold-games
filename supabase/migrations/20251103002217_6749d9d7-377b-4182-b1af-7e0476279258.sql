-- Drop existing function first to allow parameter renaming
DROP FUNCTION IF EXISTS public.add_games_to_library(uuid, text[]);

-- Recreate function with prefixed parameter names to avoid ambiguity
CREATE OR REPLACE FUNCTION public.add_games_to_library(p_user_id uuid, p_game_ids text[])
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
DECLARE
  v_game_id TEXT;
BEGIN
  FOREACH v_game_id IN ARRAY p_game_ids
  LOOP
    INSERT INTO public.user_library (user_id, game_id)
    VALUES (p_user_id, v_game_id)
    ON CONFLICT (user_id, game_id) DO NOTHING;
  END LOOP;
END;
$function$;