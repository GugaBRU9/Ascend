#include <cassert>
#include <string_view>

#include "ascend/adapters/text_adapter_name.hpp"
#include "ascend/content/module_name.hpp"
#include "ascend/domain/module_name.hpp"
#include "ascend/session/module_name.hpp"

int main() {
  using namespace std::literals;

  assert(ascend::domain::module_name() == "domain"sv);
  assert(ascend::content::module_name() == "content"sv);
  assert(ascend::session::module_name() == "session"sv);
  assert(ascend::adapters::text_adapter_name() == "text-adapter"sv);

  return 0;
}
