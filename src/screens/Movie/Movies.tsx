// src/screens/Movies.ts

import { useEffect } from "react";
import { Text, View } from "react-native"
import { useSafeAreaInsets, SafeAreaView } from "react-native-safe-area-context"
import { getPopularMovies } from "../../services/TMDB.service";
const Movies = () => {
    const insets = useSafeAreaInsets();
    useEffect(() => {
        getPopularMovies()
            .then((data) => {
                console.log("Popular Movies", data)
            });
    }, [])
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text>Contenido de Películas</Text>
        </SafeAreaView>
    )
}

export default Movies; 
