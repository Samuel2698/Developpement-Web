--Méthode pour trier des listes

quicksort :: (Ord a) => [a] -> [a] 
quicksort [] = []  
quicksort (x:xs) =   
    let smallerSorted = quicksort [a | a <- xs, a <= x]  
        biggerSorted = quicksort [a | a <- xs, a > x]  
    in  smallerSorted ++ [x] ++ biggerSorted  

--Maintenant on le fait avec la fonction "filter"

quicksort' :: (Ord a) => [a] -> [a]    
quicksort' [] = []    
quicksort' (x:xs) =     
    let smallerSorted = quicksort (filter (<=x) xs)  
        biggerSorted = quicksort (filter (>x) xs)   
    in  smallerSorted ++ [x] ++ biggerSorted  