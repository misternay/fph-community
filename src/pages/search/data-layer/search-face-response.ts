export interface SearchFaceResponse {
    results: Results[];
}

export interface Results {
    confidence: number;
    user_id: string;
    face_token: string;
}