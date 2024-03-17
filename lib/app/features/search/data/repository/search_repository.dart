import 'package:secondmarket/app/features/posts/data/repository/posts_repository.dart';
import 'package:secondmarket/app/shared/data/models/posts_response.dart';
import 'package:secondmarket/core/data/result.dart';

class SearchPostsRepository {
  SearchPostsRepository({required PostsRepository postsRepository})
      : _postsRepository = postsRepository;

  final PostsRepository _postsRepository;

  Future<Result<PostsResponse>> searchPostByTitle({
    required String searchTerm,
  }) {
    return _postsRepository.getPosts().then((resource) {
      if (resource.isSuccess) {
        final foundPosts = resource.data?.posts
            .where((post) => post.title.toLowerCase().contains(searchTerm))
            .toList();
        return Result.success(PostsResponse(posts: foundPosts!));
      }
      return Result.failure(errorMessage: resource.errorMessage);
    });
  }
}
