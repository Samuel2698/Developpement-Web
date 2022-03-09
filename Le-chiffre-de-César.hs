{-# OPTIONS_GHC -Wno-unrecognised-pragmas #-}
{-# HLINT ignore "Eta reduce" #-}
import Data.Char --pour pouvoir utiliser les fonctions ord et chr

--Ce méthode normale est plus facile à comprendre

encode :: Int -> String -> String
encode shift msg =
    let ords = map ord msg 
        shifted = map (+ shift) ords
    in  map chr shifted
--Les fonctions ord et chr convertissent un caractère vers sa valeur numérique et vice versa.


{-Méthode: Composition des Fonctions
Elles est plus courte mais plus difficile à comprendre -}

encode' :: Int -> String -> String
encode' shift msg = map (chr . (+ shift) . ord) msg 

{-Pour décoder ce message on doit décaler le code dans le sens opposé 
et du même nombre de places que le décalage initial-}

decode :: Int -> String -> String
decode shift msg = encode (negate shift) msg