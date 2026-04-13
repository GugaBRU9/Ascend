add_library(ascend_session STATIC src/module_name.cpp)

target_include_directories(
  ascend_session
  PUBLIC
    ${CMAKE_CURRENT_SOURCE_DIR}/include
)

target_link_libraries(
  ascend_session
  PUBLIC
    ascend_build_options
    ascend_build_warnings
    ascend_domain
    ascend_content
)
