from fastapi import APIRouter
from models import Post

router = APIRouter(prefix="/posts", tags=["Posts"])

@router.get("/")
def get_posts():
    return [{"title": "Why Bitcoin needs Python"}]
